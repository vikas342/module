using System;
using System.Collections.Generic;

namespace FInal.Models
{
    public partial class ObjectType
    {
        public ObjectType()
        {
            Objects = new HashSet<Object>();
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string? Type { get; set; }
        public int? Parentid { get; set; }

        public virtual ICollection<Object> Objects { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
