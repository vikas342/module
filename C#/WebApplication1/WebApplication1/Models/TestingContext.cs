using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models;

public partial class TestingContext : DbContext
{
    public TestingContext()
    {
    }

    public TestingContext(DbContextOptions<TestingContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BankingDep> BankingDeps { get; set; }

    public virtual DbSet<Car> Cars { get; set; }

    public virtual DbSet<Cars2> Cars2s { get; set; }

    public virtual DbSet<Country> Countries { get; set; }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<Discount> Discounts { get; set; }

    public virtual DbSet<Emp> Emps { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Employee1> Employees1 { get; set; }

    public virtual DbSet<Employee2> Employee2s { get; set; }

    public virtual DbSet<Empp> Empps { get; set; }

    public virtual DbSet<EmppData1> EmppData1s { get; set; }

    public virtual DbSet<EmppData2> EmppData2s { get; set; }

    public virtual DbSet<EmppData3> EmppData3s { get; set; }

    public virtual DbSet<EmppDep> EmppDeps { get; set; }

    public virtual DbSet<Exam1> Exam1s { get; set; }

    public virtual DbSet<Exam2> Exam2s { get; set; }

    public virtual DbSet<Exam3> Exam3s { get; set; }

    public virtual DbSet<Exam4> Exam4s { get; set; }

    public virtual DbSet<Incentive> Incentives { get; set; }

    public virtual DbSet<InsuranceDep> InsuranceDeps { get; set; }

    public virtual DbSet<Invent> Invents { get; set; }

    public virtual DbSet<Inventory> Inventories { get; set; }

    public virtual DbSet<Job> Jobs { get; set; }

    public virtual DbSet<JobHistory> JobHistories { get; set; }

    public virtual DbSet<Mystudent> Mystudents { get; set; }

    public virtual DbSet<Myview> Myviews { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderItem> OrderItems { get; set; }

    public virtual DbSet<OrderItem2> OrderItem2s { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<ProductsTab> ProductsTabs { get; set; }

    public virtual DbSet<SalesDatum> SalesData { get; set; }

    public virtual DbSet<ServiceDep> ServiceDeps { get; set; }

    public virtual DbSet<Sold> Solds { get; set; }

    public virtual DbSet<Sudent> Sudents { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Xyz> Xyzs { get; set; }

    public virtual DbSet<Xyz2> Xyz2s { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PC0334\\MSSQL2019;Database=testing;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BankingDep>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("banking_dep");

            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
            entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.ManagerId).HasColumnName("Manager_id");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<Car>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__cars__3213E83FD190B139");

            entity.ToTable("cars");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Brand)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Cars2>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__cars_2__3213E83F172310FC");

            entity.ToTable("cars_2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Brand)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("NAME");
            entity.Property(e => e.Price).HasColumnName("price");
        });

        modelBuilder.Entity<Country>(entity =>
        {
            entity.HasKey(e => e.CountryId).HasName("PK__countrie__7E8CD055E465B414");

            entity.ToTable("countries");

            entity.HasIndex(e => e.RegionId, "UQ__countrie__01146BAF9481BD94").IsUnique();

            entity.Property(e => e.CountryId).HasColumnName("country_id");
            entity.Property(e => e.CountryName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("country_name");
            entity.Property(e => e.RegionId).HasColumnName("region_id");
        });

        modelBuilder.Entity<Course>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("course");

            entity.Property(e => e.CourseId).HasColumnName("CourseID");
            entity.Property(e => e.CourseName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Department>(entity =>
        {
            entity.HasKey(e => e.DId).HasName("PK__departme__D95F582B0FD66432");

            entity.ToTable("department");

            entity.Property(e => e.DId).HasColumnName("d_id");
            entity.Property(e => e.DName)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("d_name");
        });

        modelBuilder.Entity<Discount>(entity =>
        {
            entity.HasKey(e => e.DiscountId).HasName("PK__Discount__E43F6DF69BB6544D");

            entity.ToTable("Discount_");

            entity.Property(e => e.DiscountId).HasColumnName("DiscountID");
            entity.Property(e => e.CreateDate).HasColumnType("date");
            entity.Property(e => e.DateEnd).HasColumnType("date");
            entity.Property(e => e.DateStart).HasColumnType("date");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");

            entity.HasOne(d => d.Product).WithMany(p => p.Discounts)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__Discount___Produ__74794A92");
        });

        modelBuilder.Entity<Emp>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__emp__3213E83F051A5AED");

            entity.ToTable("emp");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Salary).HasColumnName("salary");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__Employee__CBA14F48854A2D27");

            entity.ToTable("Employee");

            entity.Property(e => e.EmployeeId)
                .ValueGeneratedNever()
                .HasColumnName("EMPLOYEE_ID");
            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
            entity.Property(e => e.FinalSalary).HasColumnName("Final_Salary");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.Phone).HasColumnName("phone");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<Employee1>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__employee__C52E0BA85F759D48");

            entity.ToTable("employees");

            entity.Property(e => e.EmployeeId).HasColumnName("employee_id");
            entity.Property(e => e.Commission).HasColumnName("commission");
            entity.Property(e => e.DepartmentId).HasColumnName("department_id");
            entity.Property(e => e.Email)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("first_name");
            entity.Property(e => e.HireDate)
                .HasColumnType("date")
                .HasColumnName("hire_date");
            entity.Property(e => e.JobId).HasColumnName("job_id");
            entity.Property(e => e.LastName)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("last_name");
            entity.Property(e => e.ManagerId).HasColumnName("manager_id");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasColumnName("phone_number");
            entity.Property(e => e.Salary).HasColumnName("salary");

            entity.HasOne(d => d.Department).WithMany(p => p.Employee1s)
                .HasForeignKey(d => d.DepartmentId)
                .HasConstraintName("FK__employees__depar__5CD6CB2B");

            entity.HasOne(d => d.Job).WithMany(p => p.Employee1s)
                .HasForeignKey(d => d.JobId)
                .HasConstraintName("FK__employees__job_i__5DCAEF64");
        });

        modelBuilder.Entity<Employee2>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Employee2");

            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
            entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<Empp>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__Empp__CBA14F487BDF3898");

            entity.ToTable("Empp");

            entity.Property(e => e.EmployeeId)
                .ValueGeneratedNever()
                .HasColumnName("EMPLOYEE_ID");
            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.Location)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ManagerId).HasColumnName("Manager_id");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<EmppData1>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("Empp_data1");

            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.IncentiveAmount).HasColumnName("INCENTIVE_AMOUNT");
            entity.Property(e => e.IncentiveDate)
                .HasColumnType("date")
                .HasColumnName("INCENTIVE_DATE");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<EmppData2>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("Empp_data2");

            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.IncentiveAmount).HasColumnName("INCENTIVE_AMOUNT");
            entity.Property(e => e.IncentiveDate)
                .HasColumnType("date")
                .HasColumnName("INCENTIVE_DATE");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<EmppData3>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("Empp_data3");

            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
            entity.Property(e => e.TotalEmp).HasColumnName("Total_Emp");
        });

        modelBuilder.Entity<EmppDep>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("Empp_dep");

            entity.Property(e => e.DId).HasColumnName("D_id");
            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
        });

        modelBuilder.Entity<Exam1>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("exam_1");

            entity.Property(e => e.CreatedDate).HasColumnType("date");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ProductId)
                .ValueGeneratedOnAdd()
                .HasColumnName("ProductID");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Exam2>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("exam_2");

            entity.Property(e => e.CreatedDate).HasColumnType("date");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ProductId)
                .ValueGeneratedOnAdd()
                .HasColumnName("ProductID");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Exam3>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("exam_3");

            entity.Property(e => e.CreatedDate).HasColumnType("date");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ProductId)
                .ValueGeneratedOnAdd()
                .HasColumnName("ProductID");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Exam4>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("exam_4");

            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.NetAmmount).HasColumnName("net_ammount");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Incentive>(entity =>
        {
            entity.HasKey(e => e.EmployeeRefId).HasName("PK__Incentiv__0ABC534DF7A08C18");

            entity.Property(e => e.EmployeeRefId)
                .ValueGeneratedNever()
                .HasColumnName("EMPLOYEE_REF_ID");
            entity.Property(e => e.IncentiveAmount).HasColumnName("INCENTIVE_AMOUNT");
            entity.Property(e => e.IncentiveDate)
                .HasColumnType("date")
                .HasColumnName("INCENTIVE_DATE");
        });

        modelBuilder.Entity<InsuranceDep>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("insurance_dep");

            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
            entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.ManagerId).HasColumnName("Manager_id");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<Invent>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Invent");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Inventory>(entity =>
        {
            entity.HasKey(e => e.Pid).HasName("PK__inventor__DD37D91ABFEB3966");

            entity.ToTable("inventory");

            entity.Property(e => e.Pid).HasColumnName("pid");
            entity.Property(e => e.Pname)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("pname");
        });

        modelBuilder.Entity<Job>(entity =>
        {
            entity.HasKey(e => e.JobId).HasName("PK__jobs__6E32B6A5247BEE2A");

            entity.ToTable("jobs");

            entity.Property(e => e.JobId).HasColumnName("job_id");
            entity.Property(e => e.JobTitle)
                .HasMaxLength(55)
                .IsUnicode(false)
                .HasDefaultValueSql("('TESTER')")
                .HasColumnName("job_title");
            entity.Property(e => e.MaxSalary).HasColumnName("max_salary");
            entity.Property(e => e.MinSalary)
                .HasDefaultValueSql("((8000))")
                .HasColumnName("min_salary");
        });

        modelBuilder.Entity<JobHistory>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__job_hist__C52E0BA8D3278D3D");

            entity.ToTable("job_history");

            entity.Property(e => e.EmployeeId).HasColumnName("employee_id");
            entity.Property(e => e.DepartmentId).HasColumnName("department_id");
            entity.Property(e => e.EndDate)
                .HasColumnType("date")
                .HasColumnName("end_date");
            entity.Property(e => e.JobId).HasColumnName("job_id");
            entity.Property(e => e.Location)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Location1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("location_");
            entity.Property(e => e.StartingDate)
                .HasColumnType("date")
                .HasColumnName("starting_date");
        });

        modelBuilder.Entity<Mystudent>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("mystudents");

            entity.Property(e => e.Address)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Dob)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DOB");
            entity.Property(e => e.StudentName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Student_Name");
        });

        modelBuilder.Entity<Myview>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("myview");

            entity.Property(e => e.Brand)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("NAME");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PK__Order___C3905BAF433528B0");

            entity.ToTable("Order_");

            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.OrderDate).HasColumnType("date");
            entity.Property(e => e.OrderStatus)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Order___UserID__719CDDE7");
        });

        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(e => e.OrderItemId).HasName("PK__OrderIte__57ED06A19D45C8D8");

            entity.ToTable("OrderItem_");

            entity.Property(e => e.OrderItemId).HasColumnName("OrderItemID");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("FK__OrderItem__Order__7849DB76");

            entity.HasOne(d => d.Product).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__OrderItem__Produ__7755B73D");
        });

        modelBuilder.Entity<OrderItem2>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("OrderItem2_");

            entity.Property(e => e.OrderDate).HasColumnType("date");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.OrderItemId)
                .ValueGeneratedOnAdd()
                .HasColumnName("OrderItemID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__Product__B40CC6EDC1B2EE6E");

            entity.ToTable("Product");

            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.CreatedDate).HasColumnType("date");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ProductsTab>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("products_tab");

            entity.Property(e => e.OrderDate).HasColumnType("date");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.Qty).HasColumnName("qty");
            entity.Property(e => e.UserId).HasColumnName("UserID");
        });

        modelBuilder.Entity<SalesDatum>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("sales_data");

            entity.Property(e => e.Commision).HasColumnName("commision");
            entity.Property(e => e.Pid).HasColumnName("pid");
            entity.Property(e => e.SalesmanId).HasColumnName("salesman_id");

            entity.HasOne(d => d.PidNavigation).WithMany()
                .HasForeignKey(d => d.Pid)
                .HasConstraintName("FK__sales_data__pid__0A9D95DB");

            entity.HasOne(d => d.Salesman).WithMany()
                .HasForeignKey(d => d.SalesmanId)
                .HasConstraintName("FK__sales_dat__sales__0B91BA14");
        });

        modelBuilder.Entity<ServiceDep>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("service_dep");

            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DEPARTMENT");
            entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FIRST_NAME");
            entity.Property(e => e.JoiningDate)
                .HasColumnType("datetime")
                .HasColumnName("JOINING_DATE");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LAST_NAME");
            entity.Property(e => e.ManagerId).HasColumnName("Manager_id");
            entity.Property(e => e.Salary).HasColumnName("SALARY");
        });

        modelBuilder.Entity<Sold>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("sold");

            entity.Property(e => e.Id).HasColumnName("id");

            entity.HasOne(d => d.IdNavigation).WithMany()
                .HasForeignKey(d => d.Id)
                .HasConstraintName("FK__sold__id__1DB06A4F");
        });

        modelBuilder.Entity<Sudent>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("sudents_");

            entity.Property(e => e.SId).HasColumnName("s_id");
            entity.Property(e => e.StudentName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__User___1788CCAC1EFD6E7D");

            entity.ToTable("User_");

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.IsPrime).HasColumnName("isPrime");
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Xyz>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("xyz");

            entity.Property(e => e.Designation)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("designation");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Xyz2>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("xyz2");

            entity.Property(e => e.Designation)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("designation");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
