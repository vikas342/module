using JWT_Testing.DTOs;
using JWT_Testing.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace JWT_Testing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly xyzContext _xyzContext;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IConfiguration _config;


        public AccountController(xyzContext context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration config) {
        
            _xyzContext = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _config = config;

        }


        [HttpGet]
        [Route("xyz")]

        public IActionResult Get()
        {
            var x = _xyzContext.Users;
            return Ok(x);
        }

        [HttpPost]
        public async Task<IActionResult> signup([FromBody] register reg)
        {
            try
            {
                AppUser user = new AppUser()
                {
                    Name = reg.Name,
                    Email = reg.Email,
                    UserName = reg.Email.Split("@")[0],
                    
                };

                var result = await _userManager.CreateAsync(user, reg.Password);

                if (result.Succeeded)
                {
                    if (!_roleManager.RoleExistsAsync("admmin").GetAwaiter().GetResult())
                    {

                        await _roleManager.CreateAsync(new IdentityRole("admin"));
                        await _roleManager.CreateAsync(new IdentityRole("faculty"));
                        await _roleManager.CreateAsync(new IdentityRole("student"));

                    }
                    await _userManager.AddToRoleAsync(user, reg.Role.ToLower());


                    var getuser = _xyzContext.Users.FirstOrDefault(user => user.Email == reg.Email);

                    return Ok(getuser);


                }
                        return BadRequest("user not found");

              

            }
            catch (Exception e)
            {

return BadRequest(e.Message);
                    }
        }

    }
}
