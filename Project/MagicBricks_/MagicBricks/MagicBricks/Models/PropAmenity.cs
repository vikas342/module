using System;
using System.Collections.Generic;

namespace MagicBricks.Models
{
    public partial class PropAmenity
    {
        public int Id { get; set; }
        public int? PropId { get; set; }
        public int? AmId { get; set; }

        public virtual Amenity? Am { get; set; }
        public virtual Property? Prop { get; set; }
    }
}
