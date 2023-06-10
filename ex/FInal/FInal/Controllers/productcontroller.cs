using FInal.Dtos;
using FInal.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FInal.Controllers
{
    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class productcontroller : ControllerBase
    {
        private readonly Exam2DBContext _context;


        public productcontroller(Exam2DBContext context)
        {
            _context = context;
        }



        [HttpPost("post")]
        public async Task<IActionResult> post(Productdto pro)
        {

            var product = new Product()
            {
                Photo = pro.Photo,
                Category = pro.category,
                Subcategory = pro.subcategory,
                Qty = pro.Qty,
                Price = pro.price,
                Pname = pro.ProductName,
                Description = pro.Description,


            };

            _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return Ok(product);




    }


        [HttpGet]
        public async Task<IActionResult> getposts()
        {

           
            var data= _context.Products;
            return Ok(data);




        }


    }
       
    }

