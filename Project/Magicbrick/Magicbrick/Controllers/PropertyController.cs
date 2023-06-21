using Magicbrick.Interfaces;
using Magicbrick.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Collections.Generic;

using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;


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



        //public PropertyController(MagicBricks_context context, IConfiguration config, IHash hash)
        //{
        //    _context = context;
        //}



        ///get users prop_listings

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



        //get othres_proplistings


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



        //get allusers proplistings


        [HttpGet("all_properties")]

        public async Task<IActionResult> getallprops()
        {
            var data =  _context.PropertySps.FromSqlRaw($"Exec AllListing");


            return Ok(data);




        }


        //get prop by id


        [HttpGet("getpropbyid")]

        public async Task<IActionResult> getpropbyid(int id)
        {
            var data = _context.PropertySps.FromSqlRaw($"Exec  Propby_id @pid={id}");


            return Ok(data);



        }



        //get prop by city


        [HttpGet("getpropbycities")]

        public async Task<IActionResult> getpropbycities()
        {
            var data = (
                from ot in _context.Objecttypes join o in _context.Objects on ot.Id equals o.ObjTypeId where ot.ParentId == 4 select new
                {
                    city=o.Name
                }
                
                ).ToList();


            return Ok(data);



        }


        //get proptype



        [HttpGet("getproptype")]

        public async Task<IActionResult> getproptype()
        {
            var data = (
                from ot in _context.Objecttypes
                join o in _context.Objects on ot.Id equals o.ObjTypeId
                where ot.Id == 2
                select new
                {
                    type = o.Name
                }

                ).ToList();


            return Ok(data);



        }



    }
}
