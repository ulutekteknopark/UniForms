using Microsoft.EntityFrameworkCore;
using Uniforms.Uniforms.Api.Models;
using Uniforms.Uniforms.Api.Data.Configurations;

namespace Uniforms.Uniforms.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<FileUpload> FileUploads { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new QuestionConfiguration());
        }
    }
}
