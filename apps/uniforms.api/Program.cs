using System.Reflection;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add repositories to services.
builder.Services.AddScoped<ITagRepository, TagRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IFormRepository, FormRepository>();
builder.Services.AddScoped<ITemplateRepository, TemplateRepository>();
builder.Services.AddScoped<IQuestionRepository, QuestionRepository>();
builder.Services.AddScoped<IResponseRepository, ResponseRepository>();

FirebaseApp.Create(new AppOptions
{
    Credential = GoogleCredential.FromFile("./uniforms-10a55-894a19c6ae23.json")
});

// Add external authentication controllers.
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
