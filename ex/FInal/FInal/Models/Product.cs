using System;
using System.Collections.Generic;

namespace FInal.Models
{
    public partial class Product
    {
        public int Pid { get; set; }
        public string? Pname { get; set; }
        public int? Category { get; set; }
        public int? Subcategory { get; set; }
        public string? Description { get; set; }
        public int? Price { get; set; }
        public int? Qty { get; set; }
        public string? Photo { get; set; }

        public virtual ObjectType? CategoryNavigation { get; set; }
        public virtual Object? SubcategoryNavigation { get; set; }
    }
}
