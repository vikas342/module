using System.ComponentModel.DataAnnotations;

namespace Assignment1.Models
{
    public class Plants
    {
        [Key]
        public int PlantId { get; set; }
        public string PlantName { get; set; }
        public ICollection<ToyProduct> Toys { get; set; }
        
    }

}
