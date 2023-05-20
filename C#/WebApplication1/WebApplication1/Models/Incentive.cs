using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Incentive
{
    public int EmployeeRefId { get; set; }

    public DateTime IncentiveDate { get; set; }

    public int IncentiveAmount { get; set; }
}
