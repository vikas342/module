using System;
using System.Collections.Generic;

namespace MagicBricks.Models
{
    public partial class Amenity
    {
        public Amenity()
        {
            PropAmenities = new HashSet<PropAmenity>();
        }

        public int AmId { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<PropAmenity> PropAmenities { get; set; }
    }
}
