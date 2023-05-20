using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class EmppData2
{
    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public int Salary { get; set; }

    public DateTime JoiningDate { get; set; }

    public DateTime IncentiveDate { get; set; }

    public int IncentiveAmount { get; set; }
}
