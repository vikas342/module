namespace test1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            string demo = "demopolicy"; 
          
            //add this for corse policy


            builder.Services.AddCors(options =>{ options.AddPolicy(name: demo, policy => { policy.WithOrigins("http://localhost:4200", "http://www.contoso.com"); }); });



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
   







            //add this for 

                app.UseCors(demo);





            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }

      

    }
    }