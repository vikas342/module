using Db_first.Models;
using Microsoft.EntityFrameworkCore;

namespace Db_first
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            //added
            builder.Services.AddDbContext<Db_FirstContext>();
         //   builder.Services.AddDbContext<Db_FirstContext>(sql => sql.UseSqlServer("Server=PC0334\\MSSQL2019;Database=Db_First;Trusted_Connection=True;TrustServerCertificate=True;MultipleActiveResultSets=true;"));

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