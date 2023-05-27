using System.ComponentModel.DataAnnotations;

namespace Assignment1.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId{ get; set; } 
        public string CustomerName{ get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
        
        public ICollection<Orders>? Orders { get; set; }
    }
}
