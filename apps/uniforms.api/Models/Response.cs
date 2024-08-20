

namespace Uniforms.Models{
    public class Response:BaseEntity{
        public int SubmissionID { get; set; }
        public int QuestionID { get; set; }
        public string? Answer { get; set; }
    }
}