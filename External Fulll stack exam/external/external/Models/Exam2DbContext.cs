using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace external.Models
{
    public partial class Exam2DbContext : DbContext
    {
        public Exam2DbContext()
        {
        }

        public Exam2DbContext(DbContextOptions<Exam2DbContext> options)
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
               // optionsBuilder.UseSqlServer("Server=DESKTOP-1CPKOO6\\SQLEXPRESS;Database=Exam2Db;Trusted_Connection=True;");
                optionsBuilder.UseSqlServer("Server=PC0334\\MSSQL2019;Database=Exam2Db_2;Trusted_Connection=True;");

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Object>(entity =>
            {
                entity.ToTable("object");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Object1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("object");

                entity.Property(e => e.Typeid).HasColumnName("typeid");
            });

            modelBuilder.Entity<ObjectType>(entity =>
            {
                entity.ToTable("object_type");

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
                    .HasName("PK__products__DD37D91AF1469F4F");

                entity.ToTable("products");

                entity.Property(e => e.Pid).HasColumnName("pid");

                entity.Property(e => e.Cat).HasColumnName("cat");

                entity.Property(e => e.Description)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Photo)
                    .IsUnicode(false)
                    .HasColumnName("photo");

                entity.Property(e => e.Pname)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("pname");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Subcat).HasColumnName("subcat");

                entity.HasOne(d => d.CatNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Cat)
                    .HasConstraintName("FK__products__cat__412EB0B6");

                entity.HasOne(d => d.StatusNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Status)
                    .HasConstraintName("FK__products__status__403A8C7D");

                entity.HasOne(d => d.SubcatNavigation)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.Subcat)
                    .HasConstraintName("FK__products__subcat__4222D4EF");
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
                entity.ToTable("users");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Passwordhash)
                    .IsUnicode(false)
                    .HasColumnName("passwordhash");

                entity.Property(e => e.Passwordsalt)
                    .IsUnicode(false)
                    .HasColumnName("passwordsalt");

                entity.Property(e => e.PhoneNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("phone_no");

                entity.Property(e => e.Role).HasColumnName("role");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("username");

                entity.HasOne(d => d.RoleNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.Role)
                    .HasConstraintName("FK__users__role__398D8EEE");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
