using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Department
{
    public int DId { get; set; }

    public string? DName { get; set; }

    public virtual ICollection<Employee1> Employee1s { get; set; } = new List<Employee1>();
}
