using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Exam3
{
    public int ProductId { get; set; }

    public string? Name { get; set; }

    public int? Price { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedDate { get; set; }
}
