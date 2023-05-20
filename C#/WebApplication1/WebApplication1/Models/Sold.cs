using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Sold
{
    public int? Id { get; set; }

    public int Price { get; set; }

    public virtual Car? IdNavigation { get; set; }
}
