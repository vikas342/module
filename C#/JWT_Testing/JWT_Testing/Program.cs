using JWT_Testing.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace JWT_Testing
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            //added
            builder.Services.AddDbContext<xyzContext>(sql => sql.UseSqlServer(builder.Configuration["ConnectionStrings"]));


            builder.Services.AddIdentity<AppUser,IdentityRole>().AddEntityFrameworkStores<xyzContext>();



            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();


            //added
            app.UseAuthentication();
            app.UseRouting();

            app.UseAuthorization();

            ///

            app.MapControllers();

            app.Run();
        }
    }
}