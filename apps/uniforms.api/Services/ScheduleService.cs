using System.Threading.Tasks;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Services
{
    public class ScheduleService
    {
        private readonly IScheduleRepository _scheduleRepository;

        public ScheduleService(IScheduleRepository scheduleRepository)
        {
            _scheduleRepository = scheduleRepository;
        }

        public async Task CreateScheduleAsync(Schedule schedule)
        {
            await _scheduleRepository.CreateScheduleAsync(schedule);
        }

        public async Task<Schedule> GetScheduleByIdAsync(string scheduleId)
        {
            return await _scheduleRepository.GetScheduleByIdAsync(scheduleId);
        }

        public async Task UpdateScheduleAsync(Schedule schedule)
        {
            await _scheduleRepository.UpdateScheduleAsync(schedule);
        }

        public async Task DeleteScheduleAsync(string scheduleId)
        {
            await _scheduleRepository.DeleteScheduleAsync(scheduleId);
        }
    }
}
