namespace Uniforms.Uniforms.Api.Models
{
    public class FileUpload
    {
        public int FileUploadID { get; set; }
        public string? FilePath { get; set; }
        public int QuestionID { get; set; }
        public Question? Question { get; set; }
    }
}
