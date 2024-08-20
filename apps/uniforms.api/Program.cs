using System.Reflection;
using YourNamespace.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Firebase yapılandırmasını al
var firebaseConfig = builder.Configuration.GetSection("Firebase");
var projectId = firebaseConfig["ProjectId"];
var jsonCredentialsPath = firebaseConfig["JsonCredentialsPath"];

// SubmissionRepository bağımlılığını ekle
builder.Services.AddSingleton(new SubmissionRepository(projectId, jsonCredentialsPath));

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
