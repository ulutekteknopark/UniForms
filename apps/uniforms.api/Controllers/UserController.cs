using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository) { 
            _userRepository = userRepository;  
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(User user)
        {
            try
            {
                await _userRepository.CreateUserAsync(user);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetUser(string userId)
        {
            try
            {
                var user = await _userRepository.GetUserByIdAsync(userId);
                if (user == null)
                {
                    return NotFound();
                }
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(User updatedUser)
        {
            try
            {
                var existingUser = await _userRepository.GetUserByIdAsync(updatedUser.UserID);
                if (existingUser == null)
                {
                    return NotFound();
                }
                await _userRepository.UpdateUserAsync(updatedUser);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteUser(string userId)
        {
            try
            {
                var user = await _userRepository.GetUserByIdAsync(userId);
                if (user == null)
                {
                    return NotFound();
                }
                await _userRepository.DeleteUserAsync(userId);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}