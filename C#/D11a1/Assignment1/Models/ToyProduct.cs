using System.ComponentModel.DataAnnotations;

namespace Assignment1.Models
{
    public class ToyProduct
    {
        [Key]
        public int ToyId { get; set; }
        public string ToyName { get; set; } 
        public double price { get; set; }
        public int plantid { get; set; }
        public Plants Plant { get; set; }

    }
}
