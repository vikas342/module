using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Exam4
{
    public int OrderId { get; set; }

    public int? DiscountAmount { get; set; }

    public int? NetAmmount { get; set; }

    public string? Name { get; set; }

    public int? Price { get; set; }

    public string? UserName { get; set; }
}
