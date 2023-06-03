using Magicbrick.Interfaces;
using Magicbrick.Models;
using Magicbrick.Repository;
using Microsoft.EntityFrameworkCore;

namespace Magicbrick
{
    public class Program
    {

        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();


            builder.Services.AddDbContext<MagicBricksDbContext>(op => op.UseSqlServer(builder.Configuration["ConnectionString"]));


            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddScoped<IHash, HashRepo>();
            builder.Services.AddScoped<Iproperty, PropertyRepo>();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: "Policy1",
                                  policy =>
                                  {
                                      policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
                                  });
            });

            var app = builder.Build();


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors();
            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}