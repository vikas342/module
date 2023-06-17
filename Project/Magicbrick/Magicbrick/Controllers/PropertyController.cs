using Magicbrick.Interfaces;
using Magicbrick.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;

namespace Magicbrick.Controllers
{


    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : GenricController<Property>
    {

        private readonly MagicBricksDbContext _context;

        public PropertyController(IGenric<Property> igenric, MagicBricksDbContext context) : base(igenric)
        {
            _context = context;
        }



        //public PropertyController(MagicBricksDbContext context, IConfiguration config, IHash hash)
        //{
        //    _context = context;
        //}




        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("GetuserPropertylisting")]
        public async Task<IActionResult> GetuserPropertylisting()
        {

            try
            {
                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadJwtToken(jwt);
                var userid = Convert.ToInt64(jwtToken.Claims.First().Value);

                var data = _context.PropertySps.FromSqlRaw($"Exec UserListing @userid={userid}");
                return Ok(data);


            }
            catch (Exception)
            {

                return BadRequest();
            }

        }




        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("GetotheruserPropertylisting")]
        public async Task<IActionResult> GetotheruserPropertylisting()
        {

            try
            {
                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadJwtToken(jwt);
                var userid = Convert.ToInt64(jwtToken.Claims.First().Value);

                var data = _context.PropertySps.FromSqlRaw($"Exec OtherUserListing @userid={userid}");
                return Ok(data);


            }
            catch (Exception)
            {

                return BadRequest();
            }

        }



        [HttpGet("all_properties")]

        public async Task<IActionResult> getallprops()
        {

            return Ok();
            


        }




    }
}
