using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ResponseController : ControllerBase
    {
        private readonly IResponseRepository _responseRepository;
        public ResponseController(IResponseRepository responseRepository) { 
            _responseRepository = responseRepository;  
        }

        [HttpPost]
        public async Task<IActionResult> AddResponse(Response response)
        {
            try
            {
                await _responseRepository.CreateResponseAsync(response);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetResponse(string responseId)
        {
            try
            {
                var response = await _responseRepository.GetResponseByIdAsync(responseId);
                if (response == null)
                {
                    return NotFound();
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateResponse(Response updatedResponse)
        {
            try
            {
                var existingResponse = await _responseRepository.GetResponseByIdAsync(updatedResponse.ResponseID);
                if (existingResponse == null)
                {
                    return NotFound();
                }
                await _responseRepository.UpdateResponseAsync(updatedResponse);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteResponse(string responseId)
        {
            try
            {
                var response = await _responseRepository.GetResponseByIdAsync(responseId);
                if (response == null)
                {
                    return NotFound();
                }
                await _responseRepository.DeleteResponseAsync(responseId);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}