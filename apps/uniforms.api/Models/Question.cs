namespace UniForms.Uniforms.Api.Models
{
    public class Question
    {
        public Guid QuestionID { get; set; }
        public Guid FormID { get; set; }
        public string QuestionText { get; set; }
        public string QuestionType { get; set; } // "Çoktan Seçmeli", "Kısa Yanıt " vs.
        public List<string> Options { get; set; } = new List<string>(); // Seçenekli sorular için
        public bool IsRequired { get; set; }
    }
}
