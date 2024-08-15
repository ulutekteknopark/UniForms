namespace UniForms.Uniforms.Api.Models
{
    public class Notification
    {
        public Guid NotificationID { get; set; }
        public Guid UserID { get; set; }
        public Guid FormID { get; set; }
        public string Message { get; set; }
        public DateTime SentAt { get; set; }
    }
}
