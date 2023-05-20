using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace Code_First_Approch.Models
{
    public class EmpContext : DbContext
    {
        public DbSet<Employees> Emos { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=PC0334\MSSQL2019;Database=codefirst;Trusted_Connection=True;");
        }
       
    }
}
