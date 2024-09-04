using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Services
{
    public class FormService : IFormService
    {
        private readonly IFormRepository _formRepository;
        public FormService(IFormRepository formRepository)
        {
            _formRepository = formRepository;
        }

    public async Task CreateFormAsync(Form form)
    {
      await _formRepository.CreateFormAsync(form);
    }

    public async Task<Form?> GetFormByIdAsync(string formId)
    {
        return await _formRepository.GetFormByIdAsync(formId);
    }

    public async Task UpdateFormAsync(Form form)
    {
      await _formRepository.UpdateFormAsync(form);
    }

    public async Task DeleteFormAsync(string formId)
    {
      await _formRepository.DeleteFormAsync(formId);
    }
  }
}