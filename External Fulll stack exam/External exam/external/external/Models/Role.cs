using System;
using System.Collections.Generic;

namespace external.Models
{
    public partial class Role
    {
        public Role()
        {
            Products = new HashSet<Product>();
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public string? Role1 { get; set; }

        public virtual ICollection<Product> Products { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
