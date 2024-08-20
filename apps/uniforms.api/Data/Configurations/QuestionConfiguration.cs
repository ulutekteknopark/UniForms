using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Data.Configurations
{
    public class QuestionConfiguration : IEntityTypeConfiguration<Question>
    {
        public void Configure(EntityTypeBuilder<Question> builder)
        {
            builder.HasKey(q => q.QuestionID);

            builder.Property(q => q.QuestionText)
                   .IsRequired()
                   .HasMaxLength(500);

            builder.HasOne(q => q.File)
                   .WithOne(f => f.Question)
                   .HasForeignKey<FileUpload>(f => f.QuestionID);

            builder.HasMany(q => q.Tags)
                   .WithMany(t => t.Questions);
        }
    }
}
