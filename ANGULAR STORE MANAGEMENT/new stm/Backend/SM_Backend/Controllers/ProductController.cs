using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SM_Backend.Models;

namespace SM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductContext _context;
        public ProductController(ProductContext context)
        {
            _context = context;
        }
        [EnableCors("Policy1")]
        [HttpGet("Productlist")]
        public async Task<ActionResult<IEnumerable<Product>>> GetData()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.ToListAsync();
        }
        [EnableCors("Policy1")]
        [HttpPost("Productlist")]
        public async Task<IActionResult> SetData(Product req)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            Product p = new Product();
            p.Name = req.Name;
            p.Description = req.Description;
            p.Image_URL = req.Image_URL;
             _context.Products.Add(p);
             await _context.SaveChangesAsync();  
            return Ok(p);
        }
        [EnableCors("Policy1")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteData(int id)
        {
            var x = await _context.Products.FindAsync(id);
            _context.Products.Remove(x);
            await _context.SaveChangesAsync();  
            return NoContent();
        }
    }
}
