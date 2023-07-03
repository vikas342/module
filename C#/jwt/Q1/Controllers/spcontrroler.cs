using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Q1.Models;

namespace Q1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class spcontrroler : ControllerBase
    {

        private readonly Q1Context _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private IConfiguration _configuration;

        public spcontrroler(Q1Context context, UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }



        [HttpPost("createuser_usingsp")]
        public async Task<IActionResult> createuser_usingsp([FromBody] Register reg)
        {
            try
            {
                AppUser user = new()
                {
                    Name = reg.Name,
                    Email = reg.Email,
                    UserName = reg.Email.Split('@')[0],
                };


                for (int i = 1; i <= 2; i++)
                {

                    if(i == 1)
                    {




                    var result = await _userManager.CreateAsync(user, reg.Password);
                        if (result.Succeeded)
                        {
                            if (!_roleManager.RoleExistsAsync("admin").GetAwaiter().GetResult())
                            {
                                await _roleManager.CreateAsync(new IdentityRole("admin"));
                                await _roleManager.CreateAsync(new IdentityRole("basic_user"));

                            }
                            await _userManager.AddToRoleAsync(user, reg.Role.ToLower());


                            var getuser = _context.Users.FirstOrDefault(user => user.Email == reg.Email);

                            return Ok(getuser);
                        }
                        else
                        {
                            return BadRequest("User not created");
                        }

                    }


                    else
                    {

                        var result = await _userManager.CreateAsync(user, reg.Password);
                        if (result.Succeeded)
                        {
                            if (!_roleManager.RoleExistsAsync("admin").GetAwaiter().GetResult())
                            {
                                await _roleManager.CreateAsync(new IdentityRole("admin"));
                                await _roleManager.CreateAsync(new IdentityRole("basic_user"));

                            }
                            await _userManager.AddToRoleAsync(user, reg.Role.ToLower());


                            var getuser = _context.Users.FirstOrDefault(user => user.Email == reg.Email);

                            return Ok(getuser);
                        }
                        else
                        {
                            return BadRequest("User not created");
                        }


                    }




                    


                }
                return BadRequest();



            }
            catch (Exception er)
            {

                return BadRequest(er.Message);
            }

        }
    }
}
