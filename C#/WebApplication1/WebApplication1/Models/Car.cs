using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class Car
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Price { get; set; }

    public string? Brand { get; set; }
}
