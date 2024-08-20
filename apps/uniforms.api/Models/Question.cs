namespace Uniforms.Uniforms.Api.Models  // Düzeltilen namespace
{
    public class Question
    {
        public int QuestionID { get; set; }
        public int FormID { get; set; }
        public string? QuestionText { get; set; }
        public string? QuestionType { get; set; }
        public List<string>? Options { get; set; }
        public bool IsRequired { get; set; }
        public ICollection<Tag>? Tags { get; set; }
        public FileUpload? File { get; set; }
    }
}
