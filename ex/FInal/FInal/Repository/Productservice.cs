using FInal.Interfaces;
using FInal.Models;

namespace FInal.Repository
{
    public class Productservice : Igeneric<Product>
    {

        private readonly Exam2DBContext  _context;

        public Productservice(Exam2DBContext dbContext)
        {
            _context = dbContext;
        }
        List<Product> Igeneric<Product>.delete(int id)
        {
            
            var product=_context.Products.FirstOrDefault(x=>x.Pid == id);
            _context.Products.Remove(product);
            return _context.Products.ToList();
        }

        List<Product> Igeneric<Product>.getall()
        {
            return _context.Products.ToList();
        }

        Product Igeneric<Product>.getbyId(int id)
        {
            var product = _context.Products.FirstOrDefault(x => x.Pid == id);
            return product;
        }

        List<Product> Igeneric<Product>.insert(Product item)
        {
            _context.Products.Add(item);
            return _context.Products.ToList();
        }
    }
}
