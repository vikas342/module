using external.Interfaces;
using external.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace external.Controllers
{
    [EnableCors("Policy1")]

    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : GenricController<Product>
    {
        private readonly Exam2DbContext _context;
        public ProductController(igenric<Product> genric, Exam2DbContext context) : base(genric)
        {
            _context = context;


        }


        [EnableCors("Policy1")]

        [HttpGet("getcategories")]

        public async Task<IActionResult> getcategories()
        {

            var data =  (from o in _context.ObjectTypes where o.Parentid==3 select new
            {
                id=o.Id, category=o.Type
            }).ToList();
                
                
              //  _context.ObjectTypes.Select(x => x.Parentid == 3).ToList();

            return Ok(data);



        }

        [EnableCors("Policy1")]

        [HttpGet("getsubcategories/{id}")]
        public async Task<IActionResult> getsubcategories(int id)
        {

            var data = (
                from o in _context.Objects
                where o.Typeid == id
                select new
                {
                    id = o.Id,
                    category = o.Object1
                }
                ).ToList();
                
                //_context.Objects.Select(x => x.Typeid == id).ToList();

            return Ok(data);



        }


        [EnableCors("Policy1")]

        [HttpPut]
        public async Task<IActionResult> editproduct(Product product)
        {
            var pid = product.Pid;
            var data=_context.Products.FirstOrDefault(x=>x.Pid==pid);
            data.Pname = product.Pname;
            data.Photo = product.Photo;
            data.Description = data.Description;
            data.Price = data.Price;
            data.Qty = data.Qty;


            await _context.SaveChangesAsync();
            return Ok(_context.Products);




        }


        [HttpPut("deleteproduct/{id}")]
        public async Task<IActionResult> deleteproduct(int id)
        {
            
            var data = _context.Products.FirstOrDefault(x => x.Pid == id);

            data.Status = 2;


            await _context.SaveChangesAsync();
            return Ok(_context.Products);




        }





        //var data = (from p in _context.Products
        //            join obj in _context.ObjectTypes on p.Cat equals obj.Id
        //            join o in _context.Objects on p.Subcat equals o.Id
        //            where p.Status == 1
        //            select new
        //            {
        //                pid = p.Pid,
        //                pname = p.Pname,
        //                price = p.Price,
        //                description = p.Description,
        //                qty = p.Qty,
        //                cat = obj.Type,
        //                subcat = o.Object1,
        //                photo = p.Photo,
        //                status = p.Status
        //            });
        //    return  data.ToList();
    }
}
