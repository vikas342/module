using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Magicbrick.Models;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using NuGet.Common;
using System.IdentityModel.Tokens.Jwt;
using System.Xml.Linq;

namespace Magicbrick.Controllers
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


        // GET: api/Users/5

        [Authorize(AuthenticationSchemes = "Bearer")]

        [HttpGet]
        public ActionResult GetUser()
        {

            try
            {
                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var handler = new JwtSecurityTokenHandler();
                var token = new JwtSecurityToken(jwt);

                var jti = token.Claims.First().Value;
                var founduser = _context.Users.First(x => x.Email == jti).UId;

                var data = _context.Users.First(x => x.UId == founduser);

                return Ok(data);


            }
            catch (Exception)
            {

                return BadRequest();
            }

        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutUser(int id, User user)
        //{
        //    if (id != user.UId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(user).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!UserExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<User>> PostUser(User user)
        //{
        //  if (_context.Users == null)
        //  {
        //      return Problem("Entity set 'MagicBricksDbContext.Users'  is null.");
        //  }
        //    _context.Users.Add(user);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetUser", new { id = user.UId }, user);
        //}

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //private bool UserExists(int id)
        //{
        //    return (_context.Users?.Any(e => e.UId == id)).GetValueOrDefault();
        //}
    }
}
