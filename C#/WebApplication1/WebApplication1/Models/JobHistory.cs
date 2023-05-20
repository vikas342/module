using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class JobHistory
{
    public int EmployeeId { get; set; }

    public DateTime? StartingDate { get; set; }

    public DateTime? EndDate { get; set; }

    public int JobId { get; set; }

    public int DepartmentId { get; set; }

    public string? Location { get; set; }

    public string? Location1 { get; set; }
}
