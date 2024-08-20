using System.Collections.Generic;
using System.Threading.Tasks;
using Uniforms.Models;

namespace uniforms.api.Interfaces
{
    public interface INotificationRepository
    {
        Task<IEnumerable<Notification>> GetAllNotificationsAsync();
        Task<Notification?> GetNotificationByIdAsync(int notificationId);
        Task<Notification> CreateNotificationAsync(Notification notification);
        Task<Notification?> UpdateNotificationAsync(Notification notification);
        Task<bool> DeleteNotificationAsync(int notificationId);
    }
}
