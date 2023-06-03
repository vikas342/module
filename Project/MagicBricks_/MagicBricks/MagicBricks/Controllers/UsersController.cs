using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MagicBricks.Models;
using System.Text.RegularExpressions;
using MagicBricks.DTO;

namespace MagicBricks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MagicBricksDbContext _context;

        public UsersController(MagicBricksDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> SignUp([FromBody] Register reg)
        {
            if (reg == null)
            {
                return BadRequest();
            }
            User user1 = new()
            {
                Name = reg.Name,
                Email = reg.Email,
                Password = reg.Password,


            };

            await _context.Users.AddAsync(user1);
            await _context.SaveChangesAsync();
            return Ok(new
            {
                Message = "User Created"
            }) ; 
        }

    }
}
