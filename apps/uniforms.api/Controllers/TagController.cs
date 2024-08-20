using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Models;

namespace Uniforms.Uniforms.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        public TagController(ITagRepository tagRepository) { 
            _tagRepository = tagRepository;  
        }

        [HttpPost]
        public async Task<IActionResult> AddTag(Tag tag)
        {
            try
            {
                await _tagRepository.CreateTagAsync(tag);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet()]
        public async Task<IActionResult> GetTag(string tagId)
        {
            try
            {
                var tag = await _tagRepository.GetTagByIdAsync(tagId);
                if (tag == null)
                {
                    return NotFound();
                }
                return Ok(tag);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateTag(Tag updatedTag)
        {
            try
            {
                var existingTag = await _tagRepository.GetTagByIdAsync(updatedTag.TagID);
                if (existingTag == null)
                {
                    return NotFound();
                }
                await _tagRepository.UpdateTagAsync(updatedTag);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTag(string tagId)
        {
            try
            {
                var tag = await _tagRepository.GetTagByIdAsync(tagId);
                if (tag == null)
                {
                    return NotFound();
                }
                await _tagRepository.DeleteTagAsync(tagId);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}