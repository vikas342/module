using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class OrderItem2
{
    public int OrderItemId { get; set; }

    public int? ProductId { get; set; }

    public int? OrderId { get; set; }

    public int? Qty { get; set; }

    public DateTime? OrderDate { get; set; }
}
