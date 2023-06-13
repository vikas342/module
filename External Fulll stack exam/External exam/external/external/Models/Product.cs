using System;
using System.Collections.Generic;

namespace external.Models
{
    public partial class Product
    {
        public int Pid { get; set; }
        public string? Pname { get; set; }
        public string? Photo { get; set; }
        public string? Description { get; set; }
        public int? Price { get; set; }
        public int? Qty { get; set; }
        public int? Status { get; set; } = 1;
        public int? Cat { get; set; }
        public int? Subcat { get; set; }

        public virtual ObjectType? CatNavigation { get; set; }
        public virtual Role? StatusNavigation { get; set; }
        public virtual Object? SubcatNavigation { get; set; }
    }
}
