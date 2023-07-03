using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Q1.Models;
using System.Data;
using System.IdentityModel.Tokens.Jwt;

namespace Q1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class usercontroller : ControllerBase
    {


        private readonly Q1Context _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private IConfiguration _configuration;

        public usercontroller(Q1Context context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }






        //for basisc user

        [Authorize(AuthenticationSchemes = "Bearer", Roles = "basic_user")]

        [HttpPut("pdata/{name}")]
        public IActionResult pdata(string name, Update up)
        {

            try
            {

                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var handler = new JwtSecurityTokenHandler();
                var token = new JwtSecurityToken(jwt);

                var jti = token.Claims.First().Value;

                var foundemail = _context.Users.First(x => x.Email == jti).Email;

                var data = _context.Users.First(x => x.Name == name);

                if (foundemail == data.Email)
                {



                    data.Name = up.Name;


                    data.Email = up.Email;
                    data.NormalizedEmail = data.Email.ToUpper();
                    data.UserName = up.Email.Split('@')[0];
                    data.NormalizedUserName = up.Email.Split('@')[0].ToUpper();



                    _context.SaveChanges();



                    return Ok();

                }
                else
                {
                    return BadRequest();

                }
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }



    }
}
