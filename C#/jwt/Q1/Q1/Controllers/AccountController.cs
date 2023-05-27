using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Q1.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Q1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly Q1Context _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly  RoleManager<IdentityRole> _roleManager;
        private IConfiguration _configuration;

        public AccountController(Q1Context context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }



        [HttpPost("signup")]
        public async Task<IActionResult> signup([FromBody] Register reg)
        {
            try
            {
                AppUser user = new()
                {
                    Name=reg.Name,
                    Email = reg.Email,
                    UserName = reg.Email.Split('@')[0],


                };

                var result = await _userManager.CreateAsync(user,reg.Password);


                if(result.Succeeded)
                {
                    if(!_roleManager.RoleExistsAsync("admin").GetAwaiter().GetResult())
                    {
                        await _roleManager.CreateAsync(new IdentityRole("admin"));
                        await _roleManager.CreateAsync(new IdentityRole("basic_user"));

                    }
                    await _userManager.AddToRoleAsync(user,reg.Role.ToLower());


                    var getuser= _context.Users.FirstOrDefault(user=> user.Email == reg.Email);

                    return Ok(getuser);
                }
                else
                {
                    return BadRequest("User not created");
                }


            }
            catch (Exception er)
            {

                return BadRequest(er.Message);
            }

        }


        [Authorize(AuthenticationSchemes ="Bearer",Roles = "admin")]

        [HttpGet("getdata")]
        public IActionResult detdata()
        {
            var data = _context.Users;
            return Ok(data);
        }



        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]

        [HttpGet("getdatabyname/{name}")]
        public IActionResult getdata(string name)
        {
            var data = _context.Users.First(x=>x.Name==name);
            return Ok(data);
        }





        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]

        [HttpDelete("deldata/{name}")]
        public IActionResult deldata(string name)
        {
            var data = _context.Users.First(x => x.Name == name);
            _context.Users.Remove(data);
            return Ok(data);
        }






        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]

        [HttpPut("putdata/{name}")]
        public IActionResult putdata(string name, Update up )
        {
            try
            {

                var data = _context.Users.First(x => x.Name == name);
                var id = data.Id;

                data.Name = up.Name;
                data.Email = up.Email;
                

                _context.SaveChanges();



                return Ok();

            }
            catch (Exception)
            {

                return BadRequest();            }
           
        }






        [HttpPost("login")]

        public async Task<IActionResult> login([FromBody] Login login)
        {
            try
            {

                var user = await _context.Users.FirstAsync(user => user.Email == login.Email);

                if(user != null)
                {
                    bool isvalid = await _userManager.CheckPasswordAsync(user, login.Password);

                    if(isvalid)
                    {

                        var role= await _userManager.GetRolesAsync(user);

                        var claims = new List<Claim> { 
                        
                            new Claim(ClaimTypes.Email,user.Email),
                            new Claim(ClaimTypes.Role,role.FirstOrDefault())
                        };


                        SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokenkey"]));


                        var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);


                        var tokerDescriptor = new SecurityTokenDescriptor()
                        {
                            Subject = new ClaimsIdentity(claims),
                            Expires = DateTime.UtcNow.AddHours(1),
                            SigningCredentials = cred

                        };

                        var tokenHandler = new JwtSecurityTokenHandler();
                        var token = tokenHandler.CreateToken(tokerDescriptor);


                        var responce = new
                        {
                            msg = "Login Succesful",
                            token = tokenHandler.WriteToken(token)
                        };

                        return Ok(responce);
                    }
                }
               
                    return BadRequest("Invalid details");
         

            }
            catch (Exception er)
            {

                return BadRequest(er.Message);
            }
        }


    }
}
