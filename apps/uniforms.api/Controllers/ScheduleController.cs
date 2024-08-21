using Microsoft.AspNetCore.Mvc;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;
using System;
using System.Threading.Tasks;

namespace Uniforms.Uniforms.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleRepository _scheduleRepository;

        public ScheduleController(IScheduleRepository scheduleRepository)
        {
            _scheduleRepository = scheduleRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AddSchedule(Schedule schedule)
        {
            try
            {
                await _scheduleRepository.CreateScheduleAsync(schedule);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetSchedule(string? scheduleId)
        {
            if (string.IsNullOrEmpty(scheduleId))
            {
                return BadRequest("Schedule ID cannot be null or empty");
            }
            try
            {
                var schedule = await _scheduleRepository.GetScheduleByIdAsync(scheduleId);
                if (schedule == null)
                {
                    return NotFound();
                }
                return Ok(schedule);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSchedule(Schedule updatedSchedule)
        {
            try
            {
                var existingSchedule = await _scheduleRepository.GetScheduleByIdAsync(updatedSchedule.ScheduleID);
                if (existingSchedule == null)
                {
                    return NotFound();
                }
                await _scheduleRepository.UpdateScheduleAsync(updatedSchedule);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteSchedule(string scheduleId)
        {
            try
            {
                var schedule = await _scheduleRepository.GetScheduleByIdAsync(scheduleId);
                if (schedule == null)
                {
                    return NotFound();
                }
                await _scheduleRepository.DeleteScheduleAsync(scheduleId);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
