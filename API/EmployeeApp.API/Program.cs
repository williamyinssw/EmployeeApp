using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EmployeeApp.API.Data;
using EmployeeApp.API.Middlewares;
using EmployeeApp.API.Interfaces;
using EmployeeApp.API.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<EmployeeAppAPIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeAppAPIContext") ?? throw new InvalidOperationException("Connection string 'EmployeeAppAPIContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseLoggingMiddleware();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
