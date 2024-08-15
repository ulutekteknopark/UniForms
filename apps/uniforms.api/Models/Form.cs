namespace UniForms.Uniforms.Api.Models
{
    public class Form
    {
        public Guid FormID { get; set; }
        public string FormTitle { get; set; }
        public string Description { get; set; }
        public Guid OwnerID { get; set; } 
        public Template Template { get; set; }
        public List<Question> Questions { get; set; } = new List<Question>(); // Soru listesi
        public List<Response> Responses { get; set; } = new List<Response>(); // Yanıt Listesi
    }
}
