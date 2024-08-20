using System.Threading.Tasks;
using Uniforms.Uniforms.Api.Models; 
namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface ITemplateService
    {
        Task<Template> CreateTemplateAsync(Template template);
        Task<Template?> GetTemplateByIdAsync(string templateId);
        Task UpdateTemplateAsync(Template template);
        Task DeleteTemplateAsync(string templateId);
    }
}
