using FInal.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FInal.Controllers
{




    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class Subcategory : ControllerBase
    {
        private readonly Exam2DBContext _context;


        public Subcategory(Exam2DBContext context)
        {
            _context = context;
        }


        // GET api/<Subcategory>/5
        [HttpGet]
       public async Task<IActionResult> get()
            {


                var data = (from c in _context.Objects where c.Id >2 select new {id=c.Id, category = c.Object1 });

                return Ok(data);

            }


        }
}
