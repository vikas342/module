using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Q1.Models;
using System.Data;

namespace Q1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Admincontrollers : ControllerBase
    {

        private readonly Q1Context _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private IConfiguration _configuration;

        public Admincontrollers(Q1Context context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }




        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]

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
            var data = _context.Users.First(x => x.Name == name);
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





        // for admin



        [Authorize(AuthenticationSchemes = "Bearer", Roles = "admin")]

        [HttpPut("putdata/{name}")]
        public IActionResult putdata(string name, Update up)
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

                return BadRequest();
            }

        }
    }
}
