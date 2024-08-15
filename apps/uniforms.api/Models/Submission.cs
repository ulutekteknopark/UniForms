namespace UniForms.Uniforms.Api.Models
{
    public class Submission
    {
        public Guid SubmissionID { get; set; }
        public Guid FormID { get; set; }
        public Guid SubmittedBy { get; set; } 
        public DateTime SubmittedAt { get; set; }
        public string ResponseData { get; set; } // JSON formatında
    }
}
