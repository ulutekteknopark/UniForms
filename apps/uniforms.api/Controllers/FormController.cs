using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly IFormRepository _formRepository;
        public FormController(IFormRepository formRepository) { 
            _formRepository = formRepository;  
        }

        [HttpPost]
        public async Task<IActionResult> AddForm(Form form)
        {
            try
            {
                await _formRepository.CreateFormAsync(form);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetForm(string formId)
        {
            try
            {
                var form = await _formRepository.GetFormByIdAsync(formId);
                if (form == null)
                {
                    return NotFound();
                }
                return Ok(form);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateForm(Form updatedForm)
        {
            try
            {
                var existingForm = await _formRepository.GetFormByIdAsync(updatedForm.FormID);
                if (existingForm == null)
                {
                    return NotFound();
                }
                await _formRepository.UpdateFormAsync(updatedForm);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteForm(string formId)
        {
            try
            {
                var form = await _formRepository.GetFormByIdAsync(formId);
                if (form == null)
                {
                    return NotFound();
                }
                await _formRepository.DeleteFormAsync(formId);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}