using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? UserName { get; set; }

    public int? IsPrime { get; set; }

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}
