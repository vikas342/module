using external.Dtos;
using external.Interfaces;
using external.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;

namespace external.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthCotroller : ControllerBase
    {

        private readonly Exam2DbContext _context;
        private readonly IConfiguration _config;
        private readonly IHash _hash;
        private readonly EmailService _emailService;

        public AuthCotroller(Exam2DbContext context,IConfiguration config,IHash hash)
        {
            _context = context; 
            _config = config;
            _hash = hash;
        }

        [EnableCors("Policy1")]

        [HttpPost("register")]
        public async Task<IActionResult> register(Register reg)
        {
            if (_context.Users.Any(x => x.Email == reg.Email)){
                return BadRequest("user alredy exist");

            }
            var hmac = new HMACSHA256();
            string salt = Convert.ToBase64String(hmac.Key);
            int roleid = 2;

           
            reg.Password=_hash.Hash(reg.Password,salt);
      
            var user = new User { Username = reg.uname,PhoneNo = reg.phoneno, Email = reg.Email, Role = roleid, Passwordhash = reg.Password, Passwordsalt = salt };
       
            await _context.AddAsync(user);

           



            await _context.SaveChangesAsync();
            
          


            return Ok(user);
        
        }

        [EnableCors("Policy1")]

        [HttpPost("login")]
        public async Task<IActionResult> login(Login login)
        {
           
            var user=(
                from u in _context.Users join rol in _context.Roles on u.Role equals rol.Id 
                select new {Id=u.Id ,Uname=u.Username,Email=u.Email,Phoneno=u.PhoneNo,
                Passwordhash=u.Passwordhash,Passwordsalt=u.Passwordsalt,Role=rol.Role1}).FirstOrDefault(x=> x.Email==login.Email);


            if(user==null)
            {

                return BadRequest("user not found");


            }


            if (!_hash.verify(login.Password, user.Passwordhash, user.Passwordsalt))
            {
                return BadRequest("wrong password");
            }


            usrdto usr = new usrdto()
            {
                Id=user.Id,
                Uname=user.Uname,
                Email=user.Email,
                Phoneno=user.Phoneno,
                Passwordhash=user.Passwordhash,
                Passwordsalt=user.Passwordsalt,
                Role=user.Role

            };


            var tkn = tokengenrator(usr);

            return Ok(new {token=tkn,role=user.Role,message="user logged in"});

        }

        private object tokengenrator(usrdto usr)
        {


            var sectret= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("Jwt:key").Value));
            var crad= new SigningCredentials(sectret,SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(
                    ClaimTypes.SerialNumber,usr.Id.ToString()),

                new Claim(
                    ClaimTypes.Role,usr.Role),
                new Claim(
                    ClaimTypes.Email,usr.Email),

                new Claim(
                    ClaimTypes.Name,usr.Uname)
            };

            var tk = new JwtSecurityToken(


_config.GetSection("Jwt:Issuer").Value,
                _config.GetSection("Jwt:Audience").Value,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: crad,
                claims:claims
                );


            var token = new JwtSecurityTokenHandler().WriteToken( tk );
            return Ok(token);
        }
    }
}
