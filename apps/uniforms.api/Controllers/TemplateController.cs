using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;
using System.Threading.Tasks;

namespace Uniforms.Uniforms.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TemplateController : ControllerBase
    {
        private readonly ITemplateService _templateService;

        public TemplateController(ITemplateService templateService)
        {
            _templateService = templateService;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateNewTemplate([FromBody] Template template)
        {
            if (template == null)
            {
                return BadRequest("Template data is missing.");
            }

            await _templateService.CreateTemplateAsync(template);
            return CreatedAtAction(nameof(GetTemplateById), new { id = template.TemplateID }, template);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTemplateById(string id)
        {
            var template = await _templateService.GetTemplateByIdAsync(id);
            if (template == null)
            {
                return NotFound($"Template with ID {id} not found.");
            }

            return Ok(template);
        }

        [HttpPut("update")]
        public async Task<IActionResult> ModifyTemplate([FromBody] Template template)
        {
            if (template == null)
            {
                return BadRequest("Template data is missing.");
            }

            var existingTemplate = await _templateService.GetTemplateByIdAsync(template.TemplateID);
            if (existingTemplate == null)
            {
                return NotFound($"Template with ID {template.TemplateID} not found.");
            }

            await _templateService.UpdateTemplateAsync(template);
            return Ok(template);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveTemplate(string id)
        {
            var template = await _templateService.GetTemplateByIdAsync(id);
            if (template == null)
            {
                return NotFound($"Template with ID {id} not found.");
            }

            await _templateService.DeleteTemplateAsync(id);
            return NoContent();
        }
    }
}
