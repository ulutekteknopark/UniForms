using Google.Cloud.Firestore;

namespace Uniforms.Models
{
    [FirestoreData]
    public class Notification : BaseEntity
    {
        [FirestoreProperty]
        public int NotificationID { get; set; }

        [FirestoreProperty]
        public int UserID { get; set; }

        [FirestoreProperty]
        public int FormID { get; set; }

        [FirestoreProperty]
        public string? Message { get; set; }

        [FirestoreProperty]
        public DateTime SentAt { get; set; }
    }
}
