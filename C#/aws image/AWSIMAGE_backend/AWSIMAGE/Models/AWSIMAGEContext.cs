using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AWSIMAGE.Models
{
    public partial class AWSIMAGEContext : DbContext
    {
        public AWSIMAGEContext()
        {
        }

        public AWSIMAGEContext(DbContextOptions<AWSIMAGEContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ImageTable> ImageTables { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0334\\MSSQL2019;Database=AWSIMAGE;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ImageTable>(entity =>
            {
                entity.HasKey(e => e.ImageId)
                    .HasName("PK__ImageTab__7516F70CB43CC8AC");

                entity.ToTable("ImageTable");

                entity.Property(e => e.ImageUrl).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
