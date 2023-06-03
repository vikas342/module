using System;
using System.Collections.Generic;

namespace MagicBricks.Models
{
    public partial class Property
    {
        public Property()
        {
            PropAmenities = new HashSet<PropAmenity>();
            PropertyImages = new HashSet<PropertyImage>();
            Wishlists = new HashSet<Wishlist>();
        }

        public int PropId { get; set; }
        public int? OwnerDetails { get; set; }
        public int? Address { get; set; }
        public string PostedBy { get; set; } = null!;
        public int Price { get; set; }
        public string PropFor { get; set; } = null!;
        public string PropType { get; set; } = null!;
        public DateTime? CreatedAt { get; set; }

        public virtual Address? AddressNavigation { get; set; }
        public virtual Owner? OwnerDetailsNavigation { get; set; }
        public virtual ICollection<PropAmenity> PropAmenities { get; set; }
        public virtual ICollection<PropertyImage> PropertyImages { get; set; }
        public virtual ICollection<Wishlist> Wishlists { get; set; }
    }
}
