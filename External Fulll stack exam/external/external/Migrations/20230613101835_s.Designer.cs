﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using external.Models;

#nullable disable

namespace external.Migrations
{
    [DbContext(typeof(Exam2DbContext))]
    [Migration("20230613101835_s")]
    partial class s
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("external.Models.Object", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Object1")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("object");

                    b.Property<int?>("Typeid")
                        .HasColumnType("int")
                        .HasColumnName("typeid");

                    b.HasKey("Id");

                    b.ToTable("object", (string)null);
                });

            modelBuilder.Entity("external.Models.ObjectType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("Parentid")
                        .HasColumnType("int")
                        .HasColumnName("parentid");

                    b.Property<string>("Type")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("type");

                    b.HasKey("Id");

                    b.ToTable("object_type", (string)null);
                });

            modelBuilder.Entity("external.Models.Product", b =>
                {
                    b.Property<int>("Pid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("pid");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Pid"), 1L, 1);

                    b.Property<int?>("Cat")
                        .HasColumnType("int")
                        .HasColumnName("cat");

                    b.Property<string>("Description")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)")
                        .HasColumnName("description");

                    b.Property<string>("Photo")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)")
                        .HasColumnName("photo");

                    b.Property<string>("Pname")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("pname");

                    b.Property<int?>("Price")
                        .HasColumnType("int")
                        .HasColumnName("price");

                    b.Property<int?>("Qty")
                        .HasColumnType("int")
                        .HasColumnName("qty");

                    b.Property<int?>("Status")
                        .HasColumnType("int")
                        .HasColumnName("status");

                    b.Property<int?>("Subcat")
                        .HasColumnType("int")
                        .HasColumnName("subcat");

                    b.HasKey("Pid")
                        .HasName("PK__products__DD37D91AF1469F4F");

                    b.HasIndex("Cat");

                    b.HasIndex("Status");

                    b.HasIndex("Subcat");

                    b.ToTable("products", (string)null);
                });

            modelBuilder.Entity("external.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Role1")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("role");

                    b.HasKey("Id");

                    b.ToTable("roles", (string)null);
                });

            modelBuilder.Entity("external.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("email");

                    b.Property<string>("Passwordhash")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)")
                        .HasColumnName("passwordhash");

                    b.Property<string>("Passwordsalt")
                        .IsUnicode(false)
                        .HasColumnType("varchar(max)")
                        .HasColumnName("passwordsalt");

                    b.Property<string>("PhoneNo")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("phone_no");

                    b.Property<int?>("Role")
                        .HasColumnType("int")
                        .HasColumnName("role");

                    b.Property<string>("Username")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("username");

                    b.HasKey("Id");

                    b.HasIndex("Role");

                    b.ToTable("users", (string)null);
                });

            modelBuilder.Entity("external.Models.Product", b =>
                {
                    b.HasOne("external.Models.ObjectType", "CatNavigation")
                        .WithMany("Products")
                        .HasForeignKey("Cat")
                        .HasConstraintName("FK__products__cat__412EB0B6");

                    b.HasOne("external.Models.Role", "StatusNavigation")
                        .WithMany("Products")
                        .HasForeignKey("Status")
                        .HasConstraintName("FK__products__status__403A8C7D");

                    b.HasOne("external.Models.Object", "SubcatNavigation")
                        .WithMany("Products")
                        .HasForeignKey("Subcat")
                        .HasConstraintName("FK__products__subcat__4222D4EF");

                    b.Navigation("CatNavigation");

                    b.Navigation("StatusNavigation");

                    b.Navigation("SubcatNavigation");
                });

            modelBuilder.Entity("external.Models.User", b =>
                {
                    b.HasOne("external.Models.Role", "RoleNavigation")
                        .WithMany("Users")
                        .HasForeignKey("Role")
                        .HasConstraintName("FK__users__role__398D8EEE");

                    b.Navigation("RoleNavigation");
                });

            modelBuilder.Entity("external.Models.Object", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("external.Models.ObjectType", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("external.Models.Role", b =>
                {
                    b.Navigation("Products");

                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
