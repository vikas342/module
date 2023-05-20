using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class ProductsTab
{
    public int? ProductId { get; set; }

    public int? UserId { get; set; }

    public int? Qty { get; set; }

    public DateTime? OrderDate { get; set; }
}
