using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Country
{
    public int CountryId { get; set; }

    public string? CountryName { get; set; }

    public int RegionId { get; set; }
}
