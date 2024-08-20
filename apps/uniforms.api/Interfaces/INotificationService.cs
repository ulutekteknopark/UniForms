using System.Collections.Generic;
using System.Threading.Tasks;
using Uniforms.Models;

namespace uniforms.api.Interfaces
{
    public interface INotificationService
    {
        Task<IEnumerable<Notification>> GetAllAsync();
        Task<Notification?> GetByIdAsync(int notificationId);
        Task<Notification> CreateAsync(Notification notification);
        Task<Notification?> UpdateAsync(Notification notification);
        Task<bool> DeleteAsync(int notificationId);
    }
}
