using Assignment1.Models;
using Microsoft.EntityFrameworkCore;

    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.

    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

        //builder.Services.AddDbContext<ToysContext>(opt =>
        //{
        //    opt.UseSqlServer("Server=PC0420\\MSSQL2019;Database=Toys;Trusted_Connection=True;TrustServerCertificate=True;");
        //});

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.Run();
