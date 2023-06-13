using System;
using System.Collections.Generic;

namespace external.Models
{
    public partial class ObjectType
    {
        public ObjectType()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string? Type { get; set; }
        public int? Parentid { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
