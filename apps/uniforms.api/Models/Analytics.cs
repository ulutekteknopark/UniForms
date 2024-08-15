namespace UniForms.Uniforms.Api.Models
{
    public class Analytics
    {
        public Guid FormID { get; set; } 
        public int TotalResponses { get; set; }
        public double ResponseRate { get; set; }
        public TimeSpan AverageCompletionTime { get; set; }
    }
}
