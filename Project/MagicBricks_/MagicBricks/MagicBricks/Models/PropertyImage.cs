using System;
using System.Collections.Generic;

namespace MagicBricks.Models
{
    public partial class PropertyImage
    {
        public int ImgId { get; set; }
        public int? PropertyId { get; set; }
        public string ImageUrl { get; set; } = null!;

        public virtual Property? Property { get; set; }
    }
}
