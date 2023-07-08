using Microsoft.Extensions.Options;
using SR_p2.Hubs;

namespace SR_p2
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



            builder.Services.AddSignalR();            // Add this service too


            builder.Services.AddCors(
                Options => Options.AddPolicy("corsPolicy",

                builder =>
                {
                    builder.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:4200/").AllowCredentials();

                }
                ));

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
            
            
            app.MapHub<ChatHub>("/chatsocket");     // path will look like this https://localhost:44379/chatsocket 


            app.Run();
        }
    }
}