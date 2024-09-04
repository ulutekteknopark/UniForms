using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface IFormService
    {
        Task CreateFormAsync(Form form);
        Task UpdateFormAsync(Form form);
        Task DeleteFormAsync(string formId);
        Task<Form?> GetFormByIdAsync(string formId);
    }
}