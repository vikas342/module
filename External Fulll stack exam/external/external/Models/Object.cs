using System;
using System.Collections.Generic;

namespace external.Models
{
    public partial class Object
    {
        public Object()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string? Object1 { get; set; }
        public int? Typeid { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
