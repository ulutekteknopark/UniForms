namespace UniForms.Uniforms.Api.Models
{
    public class Template
    {
        public Guid TemplateID { get; set; }
        public string TemplateName { get; set; } // "Anket", "Başvuru Formu" vs.
        public List<Question> DefaultQuestions { get; set; } = new List<Question>();
    }
}
