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
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace Magicbrick.Controllers
{
    [EnableCors("Policy1")]

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
        public async Task<IActionResult> GetUser()
        {

            try
            {
                var jwt = Request.Headers["Authorization"].First().Replace("Bearer ", string.Empty);

                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadJwtToken(jwt);
                var userid = Convert.ToInt64(jwtToken.Claims.First().Value);

                var data = _context.userSP.FromSqlRaw($"Exec userdetails @userid={userid}");
                return Ok(data);


            }
            catch (Exception)
            {

                return BadRequest();
            }

        }

       
    }
}
