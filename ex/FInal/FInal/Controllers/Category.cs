using FInal.Interfaces;
using FInal.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FInal.Controllers
{
    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class Category : ControllerBase
    {

        private readonly Exam2DBContext _context;


        public Category(Exam2DBContext context)
        {
            _context = context;
        }


      

                [HttpGet("categories")]
                public async Task<IActionResult> getall() {


                    var data = (from c in _context.ObjectTypes where c.Parentid==1 select new {id=c.Id, category=c.Type});

                    return Ok(data);
        

        }



            }
        }
    