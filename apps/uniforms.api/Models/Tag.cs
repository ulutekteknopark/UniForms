namespace Uniforms.Uniforms.Api.Models
{
    public class Tag
    {
        public int TagID { get; set; }
        public string? Name { get; set; }
        public ICollection<Question>? Questions { get; set; }
    }
}
