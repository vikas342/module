using Microsoft.EntityFrameworkCore;

namespace codefirst1.Models
{
    public class EmployeeContext:DbContext
    {

       

        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }

        public DbSet<Department> Departments { get; set; }
    }
}
