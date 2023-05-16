using System;
using System.Collections.Generic;

namespace Api_2.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? ProductName { get; set; }

    public int? Qty { get; set; }
}
