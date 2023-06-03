using System;
using System.Collections.Generic;

namespace MagicBricks.Models
{
    public partial class Address
    {
        public Address()
        {
            Properties = new HashSet<Property>();
        }

        public int AddId { get; set; }
        public string BuildingName { get; set; } = null!;
        public string Area { get; set; } = null!;
        public string City { get; set; } = null!;
        public string State { get; set; } = null!;
        public string Pincode { get; set; } = null!;

        public virtual ICollection<Property> Properties { get; set; }
    }
}
