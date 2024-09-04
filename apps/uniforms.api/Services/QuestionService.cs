using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Services
{
    public class QuestionService : IQuestionService
    {
        private readonly IQuestionRepository _questionRepository;
        public QuestionService(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

    public async Task CreateQuestionAsync(Question question)
    {
      await _questionRepository.CreateQuestionAsync(question);
    }

    public async Task<Question?> GetQuestionByIdAsync(string questionId)
    {
        return await _questionRepository.GetQuestionByIdAsync(questionId);
    }

    public async Task UpdateQuestionAsync(Question question)
    {
      await _questionRepository.UpdateQuestionAsync(question);
    }

    public async Task DeleteQuestionAsync(string questionId)
    {
      await _questionRepository.DeleteQuestionAsync(questionId);
    }
  }
}