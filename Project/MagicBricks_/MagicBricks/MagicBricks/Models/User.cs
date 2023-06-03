using System;
using System.Collections.Generic;

namespace MagicBricks.Models
{
    public partial class User
    {
        public User()
        {
            Owners = new HashSet<Owner>();
            Wishlists = new HashSet<Wishlist>();
        }

        public int UId { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Role { get; set; } = null!;

        public virtual ICollection<Owner> Owners { get; set; }
        public virtual ICollection<Wishlist> Wishlists { get; set; }
    }
}
