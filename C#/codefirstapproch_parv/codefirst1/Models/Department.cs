

using System.ComponentModel.DataAnnotations;

namespace codefirst1.Models
{
    public class Department
    {
        
        public int Id { get; set; }

        [Required]
        public string? DeptName { get; set; }

        public ICollection<Employee>? Employee { get; set; }
    }
}
