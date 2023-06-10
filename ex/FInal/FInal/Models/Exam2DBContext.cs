using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FInal.Models
{
    public partial class Exam2DBContext : DbContext
    {
        public Exam2DBContext()
        {
        }

        public Exam2DBContext(DbContextOptions<Exam2DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Object> Objects { get; set; } = null!;
        public virtual DbSet<ObjectType> ObjectTypes { get; set; } = null!;
        public virtual DbSet<Product> Products { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0334\\MSSQL2019;Database=Exam2DB;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Object>(entity =>
            {
                entity.ToTable("objects");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Object1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("object");

                entity.Property(e => e.Typeid).HasColumnName("typeid");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.Objects)
                    .HasForeignKey(d => d.Typeid)
                    .HasConstraintName("FK__objects__typeid__286302EC");
            });

            modelBuilder.Entity<ObjectType>(entity =>
            {
                entity.ToTable("objectType");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Parentid).HasColumnName("parentid");

                entity.Property(e => e.Type)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("type");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Pid)
                    .HasName("PK__product__DD37D91AAD8663E9");

                entity.ToTable("product");

                entity.Property(e => e.Pid).HasColumnName("pid");

                entity.Property(e => e.Description)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.Photo).IsUnicode(false);

                entity.Property(e => e.Pname)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("pname");

                entity.HasOne(d => d.CategoryNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Category)
                    .HasConstraintName("FK__product__Categor__31EC6D26");

                entity.HasOne(d => d.SubcategoryNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Subcategory)
                    .HasConstraintName("FK__product__Subcate__32E0915F");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Role1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("role");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Uid)
                    .HasName("PK__users__DD7012645DB2A95C");

                entity.ToTable("users");

                entity.Property(e => e.Uid).HasColumnName("uid");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Passwordhash)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("passwordhash");

                entity.Property(e => e.Passwordsalt)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("passwordsalt");

                entity.Property(e => e.Phoneno)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("phoneno");

                entity.Property(e => e.Role).HasColumnName("role");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("username");

                entity.HasOne(d => d.RoleNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.Role)
                    .HasConstraintName("FK__users__role__2F10007B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
