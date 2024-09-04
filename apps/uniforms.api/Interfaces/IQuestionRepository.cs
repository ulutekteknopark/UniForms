using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface IQuestionRepository
    {
        Task CreateQuestionAsync(Question question);
        Task<Question?> GetQuestionByIdAsync(string questionId);
        Task UpdateQuestionAsync(Question question);
        Task DeleteQuestionAsync(string questionId);
    }
}