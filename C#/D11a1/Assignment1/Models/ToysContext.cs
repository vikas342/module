using Microsoft.EntityFrameworkCore;

namespace Assignment1.Models
{
    public class ToysContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Plants> Plants { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<ToyProduct> ToyProducts { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionbuilder)
        {
            optionbuilder.UseSqlServer("Server=PC0420\\MSSQL2019;Database=Toys;Trusted_Connection=True;TrustServerCertificate=True;");
        }



     
    }
}
