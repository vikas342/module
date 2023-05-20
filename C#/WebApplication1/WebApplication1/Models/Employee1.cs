using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Employee1
{
    public int EmployeeId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }

    public DateTime? HireDate { get; set; }

    public int? Salary { get; set; }

    public int? Commission { get; set; }

    public int? ManagerId { get; set; }

    public int? DepartmentId { get; set; }

    public int? JobId { get; set; }

    public virtual Department? Department { get; set; }

    public virtual Job? Job { get; set; }
}
