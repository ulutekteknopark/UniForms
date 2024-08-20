using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Models;
using uniforms.api.Interfaces;

namespace Uniforms.Uniforms.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotificationController : ControllerBase
    {
        private readonly INotificationService _notificationService;

        public NotificationController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }

        // GET: api/Notification
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var notifications = await _notificationService.GetAllAsync();
            return Ok(notifications);
        }

        // GET: api/Notification/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var notification = await _notificationService.GetByIdAsync(id);
            if (notification == null)
            {
                return NotFound();
            }
            return Ok(notification);
        }

        // POST: api/Notification
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Notification notification)
        {
            if (notification == null)
            {
                return BadRequest();
            }
            var createdNotification = await _notificationService.CreateAsync(notification);
            return CreatedAtAction(nameof(Get), new { id = createdNotification.NotificationID }, createdNotification);
        }

        // PUT: api/Notification/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Notification notification)
        {
            if (notification == null || id != notification.NotificationID)
            {
                return BadRequest();
            }
            var existingNotification = await _notificationService.GetByIdAsync(id);
            if (existingNotification == null)
            {
                return NotFound();
            }
            var updatedNotification = await _notificationService.UpdateAsync(notification);
            return Ok(updatedNotification);
        }

        // DELETE: api/Notification/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingNotification = await _notificationService.GetByIdAsync(id);
            if (existingNotification == null)
            {
                return NotFound();
            }
            var result = await _notificationService.DeleteAsync(id);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
