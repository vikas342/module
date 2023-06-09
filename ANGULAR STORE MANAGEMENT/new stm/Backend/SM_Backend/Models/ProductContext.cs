﻿using Microsoft.EntityFrameworkCore;

namespace SM_Backend.Models
{
    public class ProductContext: DbContext
    {
        public ProductContext()
        {

        }
        public ProductContext(DbContextOptions<ProductContext> options):base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
    }
}
