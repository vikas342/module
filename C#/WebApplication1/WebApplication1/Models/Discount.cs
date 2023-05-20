using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Discount
{
    public int DiscountId { get; set; }

    public int? ProductId { get; set; }

    public int? Discountpercentage { get; set; }

    public DateTime? DateStart { get; set; }

    public DateTime? DateEnd { get; set; }

    public DateTime? CreateDate { get; set; }

    public virtual Product? Product { get; set; }
}
