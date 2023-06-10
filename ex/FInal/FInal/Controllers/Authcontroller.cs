using FInal.Dtos;
using FInal.Interfaces;
using FInal.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Win32;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace FInal.Controllers
{

    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class Authcontroller : ControllerBase
    {
        private readonly Exam2DBContext _context;
        private readonly IConfiguration _config;
        private readonly Ihash _hash;

        public Authcontroller(Exam2DBContext context, IConfiguration config, Ihash hash)
        {
            _context = context;
            _config = config;
            _hash = hash;
        }


        [HttpPost("register")]
        public async Task<IActionResult> register(Registerdto reg)
        {
            if (_context.Users.Any(x => x.Email == reg.Email))
            {
                return BadRequest("user alredy exist");

            }
            var hmac = new HMACSHA256();
            string salt = Convert.ToBase64String(hmac.Key);
            int roleid = 2;



            reg.Password = _hash.Hash(reg.Password, salt);

            var user = new User { 
                Email = reg.Email,
                Username   = reg.Username,
                Passwordhash=reg.Password,
                Passwordsalt=salt,
                Phoneno=reg.Phoneno,
                Role=2

            };

            await _context.AddAsync(user);





            await _context.SaveChangesAsync();
           



            return Ok(user);

        }




        [HttpPost]

        public async Task<IActionResult> login(Logindto log)
        {
            var user = (from u in _context.Users
                        join r in _context.Roles on u.Role equals r.Id
                        select new
                        {
                            uid = u.Uid,
                            uname = u.Username,
                            email = u.Email,
                            cno = u.Phoneno,
                            passhash = u.Passwordhash,
                            passsalt = u.Passwordsalt,
                            role = r.Role1
                        }).FirstOrDefault(x => x.email == log.Email);
            if (user == null)
            {
                return BadRequest("user not exist");

            }

            if(!_hash.verify(log.Password,user.passhash,user.passsalt))
            {
                return BadRequest("wrong password");
            }


            userdto usr = new userdto()
            {
                uid = user.uid,
                email = user.email,
                uname = user.uname,
                phoneno=user.cno,
                passwordhash = user.passhash,
                passwordsalt = user.passsalt,
                role = user.role

            };

            var tkn = tokengenrator(usr);
            return Ok(new {token=tkn,role=user.role});


        }

        private object tokengenrator(userdto usr)
        {
            var sectret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:key").Value));
            var crad = new SigningCredentials(sectret, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(
                    ClaimTypes.SerialNumber,usr.uid.ToString()
                    ),
                new Claim(
                    ClaimTypes.Role,usr.role
                    ),
                 new Claim(
                    ClaimTypes.Email,usr.email
                    ) 


            };

            var tk = new JwtSecurityToken(


_config.GetSection("Jwt:Issuer").Value,
                _config.GetSection("Jwt:Audience").Value,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: crad,
                claims: claims
                );


            var token = new JwtSecurityTokenHandler().WriteToken(tk);
            return Ok(token);

        }
    }
   


}
