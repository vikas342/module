using System;
using System.Collections.Generic;

namespace MagicBricks.Models
{
    public partial class Wishlist
    {
        public int Id { get; set; }
        public int? PropId { get; set; }
        public int? UserId { get; set; }

        public virtual Property? Prop { get; set; }
        public virtual User? User { get; set; }
    }
}
