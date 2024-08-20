using System.Collections.Generic;
using System.Threading.Tasks;
using Uniforms.Models;
using uniforms.api.Interfaces;

namespace uniforms.api.Services
{
    public class NotificationService : INotificationService
    {
        private readonly INotificationRepository _notificationRepository;

        public NotificationService(INotificationRepository notificationRepository)
        {
            _notificationRepository = notificationRepository;
        }

        public Task<IEnumerable<Notification>> GetAllAsync()
        {
            return _notificationRepository.GetAllNotificationsAsync();
        }

        public Task<Notification?> GetByIdAsync(int notificationId)
        {
            return _notificationRepository.GetNotificationByIdAsync(notificationId);
        }

        public Task<Notification> CreateAsync(Notification notification)
        {
            return _notificationRepository.CreateNotificationAsync(notification);
        }

        public Task<Notification?> UpdateAsync(Notification notification)
        {
            return _notificationRepository.UpdateNotificationAsync(notification);
        }

        public Task<bool> DeleteAsync(int notificationId)
        {
            return _notificationRepository.DeleteNotificationAsync(notificationId);
        }
    }
}
