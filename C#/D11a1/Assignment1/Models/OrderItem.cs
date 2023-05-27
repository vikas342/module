using System.ComponentModel.DataAnnotations;

namespace Assignment1.Models
{
    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        public int ToyProductId { get; set; }
        public int Quantity { get; set; }
        public int OrderID { get; set; }
        public double Amount { get; set; }
     
        public ToyProduct ToyProduct { get; set; }
        public  Orders  Order { get; set; }

    }

}



