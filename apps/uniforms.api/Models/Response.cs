namespace UniForms.Uniforms.Api.Models
{
    public class Response
    {
        public Guid ResponseID { get; set; }
        public Guid FormID { get; set; }
        public Guid UserID { get; set; }
        public List<string> Answers { get; set; } = new List<string>();
    }
}
