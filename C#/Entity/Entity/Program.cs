using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Entity;

namespace Entity
{
    internal class Program
    {
        static void Main(string[] args)
        {

            var x = new Entity.ProductsEntities();
            var db = x.Products.ToList();

           


            x.Products.Add(new Product() { ProductName = "polo", Qty = 20,  });
            x.SaveChanges();




            foreach (var item in db)
            {
                Console.WriteLine(item.ProductName);
            }

        }
    }
}
