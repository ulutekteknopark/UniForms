using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface ITemplateRepository
    {
        Task CreateTemplateAsync(Template template);
        Task<Template?> GetTemplateByIdAsync(string templateId);
        Task UpdateTemplateAsync(Template template);
        Task DeleteTemplateAsync(string templateId);
    }
}