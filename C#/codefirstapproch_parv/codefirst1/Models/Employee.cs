using System.ComponentModel.DataAnnotations;

namespace codefirst1.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        public int DepartmentId { get; set; }
        [Required]
        public string? Password { get; set; }

        public Department? Department { get; set; }

    }
}
