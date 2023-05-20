using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Db_first.Models
{
    public partial class Db_FirstContext : DbContext
    {
        public Db_FirstContext()
        {
        }

        public Db_FirstContext(DbContextOptions<Db_FirstContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Assistant> Assistants { get; set; } = null!;
        public virtual DbSet<Department> Departments { get; set; } = null!;
        public virtual DbSet<Doctor> Doctors { get; set; } = null!;
        public virtual DbSet<Drug> Drugs { get; set; } = null!;
        public virtual DbSet<Patient> Patients { get; set; } = null!;
        public virtual DbSet<ReportSP> reportsp { get; set; } = null!;


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
      optionsBuilder.UseSqlServer("Server=PC0334\\MSSQL2019;Database=Db_First;Trusted_Connection=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Assistant>(entity =>
            {
                entity.ToTable("assistant");

                entity.Property(e => e.AssistantId).HasColumnName("assistant_id");

                entity.Property(e => e.AssistantName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("assistant_name");

                entity.Property(e => e.DepId).HasColumnName("dep_id");

                entity.HasOne(d => d.Dep)
                    .WithMany(p => p.Assistants)
                    .HasForeignKey(d => d.DepId)
                    .HasConstraintName("FK__assistant__dep_i__2A4B4B5E");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DepId)
                    .HasName("PK__departme__BB4BD8F87D958334");

                entity.ToTable("department");

                entity.Property(e => e.DepId).HasColumnName("dep_id");

                entity.Property(e => e.DepName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("dep_name");
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.HasKey(e => e.DocId)
                    .HasName("PK__doctors__8AD029241726BA08");

                entity.ToTable("doctors");

                entity.Property(e => e.DocId).HasColumnName("doc_id");

                entity.Property(e => e.DepId).HasColumnName("dep_id");

                entity.Property(e => e.DocName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("doc_name");

                entity.HasOne(d => d.Dep)
                    .WithMany(p => p.Doctors)
                    .HasForeignKey(d => d.DepId)
                    .HasConstraintName("FK__doctors__dep_id__2D27B809");
            });

            modelBuilder.Entity<Drug>(entity =>
            {
                entity.ToTable("drugs");

                entity.Property(e => e.DrugId).HasColumnName("drug_id");

                entity.Property(e => e.DrugType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("drug_type");

                entity.Property(e => e.PatientId).HasColumnName("patient_id");

                entity.HasOne(d => d.Patient)
                    .WithMany(p => p.Drugs)
                    .HasForeignKey(d => d.PatientId)
                    .HasConstraintName("FK__drugs__patient_i__35BCFE0A");
            });

            modelBuilder.Entity<Patient>(entity =>
            {
                entity.ToTable("patient");

                entity.Property(e => e.PatientId).HasColumnName("patient_id");

                entity.Property(e => e.AssistantId).HasColumnName("assistant_id");

                entity.Property(e => e.DocId).HasColumnName("doc_id");

                entity.Property(e => e.DocId2).HasColumnName("doc_id_2");

                entity.Property(e => e.DocId3).HasColumnName("doc_id_3");

                entity.Property(e => e.PatientName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("patient_name");

                entity.HasOne(d => d.Assistant)
                    .WithMany(p => p.Patients)
                    .HasForeignKey(d => d.AssistantId)
                    .HasConstraintName("FK__patient__assista__32E0915F");

                entity.HasOne(d => d.Doc)
                    .WithMany(p => p.PatientDocs)
                    .HasForeignKey(d => d.DocId)
                    .HasConstraintName("FK__patient__doc_id__300424B4");

                entity.HasOne(d => d.DocId2Navigation)
                    .WithMany(p => p.PatientDocId2Navigations)
                    .HasForeignKey(d => d.DocId2)
                    .HasConstraintName("FK__patient__doc_id___30F848ED");

                entity.HasOne(d => d.DocId3Navigation)
                    .WithMany(p => p.PatientDocId3Navigations)
                    .HasForeignKey(d => d.DocId3)
                    .HasConstraintName("FK__patient__doc_id___31EC6D26");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
