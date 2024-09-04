using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionRepository _questionRepository;
        public QuestionController(IQuestionRepository questionRepository) { 
            _questionRepository = questionRepository;  
        }

        [HttpPost]
        public async Task<IActionResult> AddQuestion(Question question)
        {
            try
            {
                await _questionRepository.CreateQuestionAsync(question);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetQuestion(string questionId)
        {
            try
            {
                var question = await _questionRepository.GetQuestionByIdAsync(questionId);
                if (question == null)
                {
                    return NotFound();
                }
                return Ok(question);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateQuestion(Question updatedQuestion)
        {
            try
            {
                var existingQuestion = await _questionRepository.GetQuestionByIdAsync(updatedQuestion.QuestionID);
                if (existingQuestion == null)
                {
                    return NotFound();
                }
                await _questionRepository.UpdateQuestionAsync(updatedQuestion);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteQuestion(string questionId)
        {
            try
            {
                var question = await _questionRepository.GetQuestionByIdAsync(questionId);
                if (question == null)
                {
                    return NotFound();
                }
                await _questionRepository.DeleteQuestionAsync(questionId);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}