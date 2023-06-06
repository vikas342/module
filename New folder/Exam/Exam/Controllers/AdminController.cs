using Exam.Interfaces;
using Exam.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;

namespace Exam.Controllers
{

    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {


        private readonly ExamDbContext _context;
      

        public AdminController(ExamDbContext context)
        {
            _context = context;
           
        }


        [Authorize(AuthenticationSchemes ="Bearer")]
        [HttpGet("getuserdetails")]
        public async Task<IActionResult> getuserdetails()
        {
            try
            {
                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadJwtToken(jwt);
                var userid = Convert.ToInt64(jwtToken.Claims.First().Value);

                var data = _context.UserdeatilSP.FromSqlRaw($"Exec userdetails @userid={userid}");
                return Ok(data);

            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }



        [Authorize(AuthenticationSchemes = "Bearer")]

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

            var z = _context.Addresses.FirstOrDefault(a => a.Uid == id);
            _context.Addresses.Remove(z);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok();
        }

       
    }
}
