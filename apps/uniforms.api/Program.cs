using System.Reflection;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Repositories;
using Uniforms.Uniforms.Api.Services;

var builder = WebApplication.CreateBuilder(args);
var Configuration = builder.Configuration;

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Benim eklediğim kısım
builder.Services.AddScoped<ITagRepository, TagRepository>();
builder.Services.AddScoped<ITagService, TagService>();


builder.Services.AddMvc().AddApplicationPart(
  Assembly.Load(new AssemblyName("Uniforms.Auth.UfAuthApi"))
);

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
