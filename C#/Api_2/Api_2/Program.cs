using Api_2.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_2
{
    public class Program
    {
        public static void Main(string[] args)
        {



            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<ProductsContext>(option => { option.UseSqlServer("Server=PC0334\\MSSQL2019;Database=Products;Trusted_Connection=True;TrustServerCertificate=True;MultipleActiveResultSets=true;"); });

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

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
        }
    }
}