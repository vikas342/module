using MagicBricks.DTO;
using MagicBricks.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MagicBricks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly MagicBricksDbContext _context;
        //private readonly UserManager<AppUser> _userManager;
        //private readonly RoleManager<IdentityRole> _roleManager;
        //private IConfiguration _configuration;

        //public AccountController(MagicBricksDbContext context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        //{
        //    _context = context;
        //    _userManager = userManager;
        //    _roleManager = roleManager;
        //    _configuration = configuration;
        //}



        //[HttpPost("signup")]
        //public async Task<IActionResult> signup([FromBody] Register reg)
        //{
        //    try
        //    {
        //        AppUser user = new()
        //        {
        //            Name = reg.Name,
        //            Email = reg.Email,
        //            UserName = reg.Email.Split('@')[0],


        //        };

        //        var result = await _userManager.CreateAsync(user, reg.Password);


        //        if (result.Succeeded)
        //        {
        //            if (!_roleManager.RoleExistsAsync("admin").GetAwaiter().GetResult())
        //            {
        //                await _roleManager.CreateAsync(new IdentityRole("admin"));
        //                await _roleManager.CreateAsync(new IdentityRole("user"));

        //            }
        //            await _userManager.AddToRoleAsync(user, reg.Role.ToLower());


        //            var getuser = _context.AspNetUsers.FirstOrDefault(user => user.Email == reg.Email);

        //            return Ok(getuser);
        //        }
        //        else
        //        {
        //            return BadRequest("User not created");
        //        }


        //    }
        //    catch (Exception er)
        //    {

        //        return BadRequest(er.Message);
        //    }

        //}
    }
}
