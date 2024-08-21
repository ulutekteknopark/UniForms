using System.Threading.Tasks;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface IScheduleRepository
    {
        Task CreateScheduleAsync(Schedule schedule);
        Task<Schedule> GetScheduleByIdAsync(string scheduleId);
        Task UpdateScheduleAsync(Schedule schedule);
        Task DeleteScheduleAsync(string scheduleId);
    }
}
