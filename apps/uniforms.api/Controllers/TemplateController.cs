using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class TemplateController : ControllerBase
    {
        private readonly ITemplateRepository _templateRepository;
        public TemplateController(ITemplateRepository templateRepository) { 
            _templateRepository = templateRepository;  
        }

        [HttpPost]
        public async Task<IActionResult> AddTemplate(Template template)
        {
            try
            {
                await _templateRepository.CreateTemplateAsync(template);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetTemplate(string templateId)
        {
            try
            {
                var template = await _templateRepository.GetTemplateByIdAsync(templateId);
                if (template == null)
                {
                    return NotFound();
                }
                return Ok(template);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateTemplate(Template updatedTemplate)
        {
            try
            {
                var existingTemplate = await _templateRepository.GetTemplateByIdAsync(updatedTemplate.TemplateID);
                if (existingTemplate == null)
                {
                    return NotFound();
                }
                await _templateRepository.UpdateTemplateAsync(updatedTemplate);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTemplate(string templateId)
        {
            try
            {
                var template = await _templateRepository.GetTemplateByIdAsync(templateId);
                if (template == null)
                {
                    return NotFound();
                }
                await _templateRepository.DeleteTemplateAsync(templateId);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}