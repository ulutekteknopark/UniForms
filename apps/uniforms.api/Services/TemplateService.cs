using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Services
{
    public class TemplateService : ITemplateService
    {
        private readonly ITemplateRepository _templateRepository;

        public TemplateService(ITemplateRepository templateRepository)
        {
            _templateRepository = templateRepository;
        }

        public async Task CreateTemplateAsync(Template template)
        {
            await _templateRepository.CreateTemplateAsync(template);
        }

        public async Task<Template?> GetTemplateByIdAsync(string templateId)
        {
            return await _templateRepository.GetTemplateByIdAsync(templateId);
        }

        public async Task UpdateTemplateAsync(Template template)
        {
            await _templateRepository.UpdateTemplateAsync(template);
        }

        public async Task DeleteTemplateAsync(string templateId)
        {
            await _templateRepository.DeleteTemplateAsync(templateId);
        }
    }
}
