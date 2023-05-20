using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class SalesDatum
{
    public int? Pid { get; set; }

    public int? SalesmanId { get; set; }

    public int Commision { get; set; }

    public virtual Inventory? PidNavigation { get; set; }

    public virtual Emp? Salesman { get; set; }
}
