using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Employee
{
    public int EmployeeId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public int Salary { get; set; }

    public DateTime JoiningDate { get; set; }

    public string Department { get; set; } = null!;

    public int? FinalSalary { get; set; }

    public int? Phone { get; set; }
}
