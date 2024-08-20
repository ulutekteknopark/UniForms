using System.Reflection;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Google.Cloud.Firestore.V1;
using Microsoft.Extensions.DependencyInjection;
using Uniforms.Uniforms.Api.Services;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMvc().AddApplicationPart(
    Assembly.Load(new AssemblyName("Uniforms.Auth.UfAuthApi"))
);

// Firebase ve Firestore yapılandırması
FirestoreDb firestore = FirestoreDb.Create("ulutek-uniforms-project", new FirestoreClientBuilder
{
    CredentialsPath = "Data/serviceAccountKey.json"
}.Build());

// Firestore'u DI container'a ekleyin
builder.Services.AddSingleton(firestore);

// IAnalyticsService arayüzünü ve AnalyticsService implementasyonunu DI container'a ekleyin
builder.Services.AddScoped<IAnalyticsService, AnalyticsService>();
builder.Services.AddScoped<IAnalyticsRepository, AnalyticsRepository>();

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
