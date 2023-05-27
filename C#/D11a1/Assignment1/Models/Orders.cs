using System.ComponentModel.DataAnnotations;

namespace Assignment1.Models
{
    public class Orders
    {
        public Orders()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        [Key]
        public int OrderId { get; set; }
        public int CutomerId { get; set; }
        public double Amount { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        public  Customer customer { get; set; }
    }
}

