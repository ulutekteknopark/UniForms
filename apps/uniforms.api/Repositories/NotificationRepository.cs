using Google.Cloud.Firestore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uniforms.Interfaces;
using Uniforms.Models;

namespace uniforms.api.Repositories
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly FirestoreDb _firestoreDb;

        public NotificationRepository(FirestoreDb firestoreDb)
        {
            _firestoreDb = firestoreDb;
        }

        public async Task<IEnumerable<Notification>> GetAllNotificationsAsync()
        {
            var notificationsCollection = _firestoreDb.Collection("notifications");
            var snapshot = await notificationsCollection.GetSnapshotAsync();
            return snapshot.Documents.Select(doc => doc.ConvertTo<Notification>());
        }

        public async Task<Notification?> GetNotificationByIdAsync(int notificationId)
        {
            var docRef = _firestoreDb.Collection("notifications").Document(notificationId.ToString());
            var documentSnapshot = await docRef.GetSnapshotAsync();
            return documentSnapshot.Exists ? documentSnapshot.ConvertTo<Notification>() : null;
        }

        public async Task<Notification> CreateNotificationAsync(Notification notification)
        {
            var docRef = _firestoreDb.Collection("notifications").Document();
            notification.NotificationID = int.Parse(docRef.Id); // Example ID generation
            await docRef.SetAsync(notification);
            return notification;
        }

        public async Task<Notification?> UpdateNotificationAsync(Notification notification)
        {
            var docRef = _firestoreDb.Collection("notifications").Document(notification.NotificationID.ToString());
            var documentSnapshot = await docRef.GetSnapshotAsync();
            if (!documentSnapshot.Exists)
                return null;

            await docRef.SetAsync(notification, SetOptions.MergeAll);
            return notification;
        }

        public async Task<bool> DeleteNotificationAsync(int notificationId)
        {
            var docRef = _firestoreDb.Collection("notifications").Document(notificationId.ToString());
            var documentSnapshot = await docRef.GetSnapshotAsync();
            if (!documentSnapshot.Exists)
                return false;

            await docRef.DeleteAsync();
            return true;
        }
    }
}
