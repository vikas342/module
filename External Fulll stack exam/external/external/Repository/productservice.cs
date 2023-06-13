using external.Interfaces;
using external.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Ocsp;

namespace external.Repository
{
    public class productservice : igenric<Product>
    {
        private readonly Exam2DbContext _context;
        private readonly EmailService _email;

        public productservice(Exam2DbContext context,EmailService es)
        {
            _context = context;
            _email = es;
        }

        List<Product> igenric<Product>.delete(int id)
        {
            var data=_context.Products.FirstOrDefault(x=>x.Pid==id);
            _context.Products.Remove(data);
            _context.SaveChanges();
            return _context.Products.ToList();
        }

        List<Product> igenric<Product>.getall()
        {
            var data=(from p in _context.Products where p.Status==1 select p).ToList();
            return  data;
        }

        Product igenric<Product>.getbyId(int id)
        {
            var data= _context.Products.FirstOrDefault(x=>x.Pid==id);
            return data;
        }

        List<Product> igenric<Product>.Insert(Product item)
        {
            
            _context.Products.Add(item);
            _context.SaveChanges();
            
                // Send the email
                // var r = _context.Users.First(x => x.Role == 1).Email;
                var r = "vsonwane3660@gmail.com";
                var s = "Product added";
                var b = $"pid:{item.Pid} \t  name:{item.Pname}   \t  price:{item.Price}";
                _email.SendEmail(r, s, b);
                var resp = new
                {
                    message = $"Email sent to {r}"
                };
         
            return _context.Products.ToList();

        }
    }
}
