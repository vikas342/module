using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MagicBricks.Models
{
    public partial class MagicBricksDbContext : DbContext
    {

        public virtual DbSet<AppUser> appuser { get; set; } = null!;

        public MagicBricksDbContext()
        {
        }

        public MagicBricksDbContext(DbContextOptions<MagicBricksDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; } = null!;
        public virtual DbSet<Amenity> Amenities { get; set; } = null!;
        public virtual DbSet<Owner> Owners { get; set; } = null!;
        public virtual DbSet<PropAmenity> PropAmenities { get; set; } = null!;
        public virtual DbSet<Property> Properties { get; set; } = null!;
        public virtual DbSet<PropertyImage> PropertyImages { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Wishlist> Wishlists { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=PC0334\\MSSQL2019;Database=MagicBricksDb;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.HasKey(e => e.AddId)
                    .HasName("PK__Address__819EBA9B95E3EA98");

                entity.ToTable("Address");

                entity.Property(e => e.AddId).HasColumnName("Add_Id");

                entity.Property(e => e.Area)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BuildingName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Building_Name");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Pincode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Amenity>(entity =>
            {
                entity.HasKey(e => e.AmId)
                    .HasName("PK__Amenitie__6F9C0DB4BB6641ED");

                entity.Property(e => e.AmId).HasColumnName("Am_Id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Owner>(entity =>
            {
                entity.ToTable("Owner");

                entity.Property(e => e.ContactNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("contact_no");

                entity.Property(e => e.OwnerId).HasColumnName("Owner_Id");

                entity.Property(e => e.OwnerName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Owner_Name");

                entity.HasOne(d => d.OwnerNavigation)
                    .WithMany(p => p.Owners)
                    .HasForeignKey(d => d.OwnerId)
                    .HasConstraintName("FK__Owner__Owner_Id__09A971A2");
            });

            modelBuilder.Entity<PropAmenity>(entity =>
            {
                entity.ToTable("Prop_amenities");

                entity.Property(e => e.AmId).HasColumnName("Am_Id");

                entity.Property(e => e.PropId).HasColumnName("Prop_Id");

                entity.HasOne(d => d.Am)
                    .WithMany(p => p.PropAmenities)
                    .HasForeignKey(d => d.AmId)
                    .HasConstraintName("FK__Prop_amen__Am_Id__18EBB532");

                entity.HasOne(d => d.Prop)
                    .WithMany(p => p.PropAmenities)
                    .HasForeignKey(d => d.PropId)
                    .HasConstraintName("FK__Prop_amen__Prop___17F790F9");
            });

            modelBuilder.Entity<Property>(entity =>
            {
                entity.HasKey(e => e.PropId)
                    .HasName("PK__Property__2EC05156E04DF9F3");

                entity.ToTable("Property");

                entity.Property(e => e.PropId).HasColumnName("Prop_Id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.OwnerDetails).HasColumnName("Owner_details");

                entity.Property(e => e.PostedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PropFor)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Prop_for");

                entity.Property(e => e.PropType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Prop_Type");

                entity.HasOne(d => d.AddressNavigation)
                    .WithMany(p => p.Properties)
                    .HasForeignKey(d => d.Address)
                    .HasConstraintName("FK__Property__Addres__0F624AF8");

                entity.HasOne(d => d.OwnerDetailsNavigation)
                    .WithMany(p => p.Properties)
                    .HasForeignKey(d => d.OwnerDetails)
                    .HasConstraintName("FK__Property__Owner___0E6E26BF");
            });

            modelBuilder.Entity<PropertyImage>(entity =>
            {
                entity.HasKey(e => e.ImgId)
                    .HasName("PK__Property__05B3F79BADF035D8");

                entity.Property(e => e.ImgId).HasColumnName("Img_Id");

                entity.Property(e => e.ImageUrl)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("Image_url");

                entity.Property(e => e.PropertyId).HasColumnName("property_id");

                entity.HasOne(d => d.Property)
                    .WithMany(p => p.PropertyImages)
                    .HasForeignKey(d => d.PropertyId)
                    .HasConstraintName("FK__PropertyI__prope__1332DBDC");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UId)
                    .HasName("PK__Users__5A2040BB303AC24F");

                entity.Property(e => e.UId).HasColumnName("U_Id");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Wishlist>(entity =>
            {
                entity.ToTable("Wishlist");

                entity.Property(e => e.PropId).HasColumnName("Prop_Id");

                entity.Property(e => e.UserId).HasColumnName("User_id");

                entity.HasOne(d => d.Prop)
                    .WithMany(p => p.Wishlists)
                    .HasForeignKey(d => d.PropId)
                    .HasConstraintName("FK__Wishlist__Prop_I__1BC821DD");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Wishlists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Wishlist__User_i__1CBC4616");
            });

            base.OnModelCreating(modelBuilder);
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
