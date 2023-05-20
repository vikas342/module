using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Emp
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int? Salary { get; set; }
}
