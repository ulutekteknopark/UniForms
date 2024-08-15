namespace UniForms.Uniforms.Api.Models
{
    public class AccessControl
    {
        public Guid FormID { get; set; } 
        public List<Guid> AllowedUsers { get; set; } = new List<Guid>(); // Erişimi olan kullanıcıların ID listesi
        public bool IsPublic { get; set; }
    }
}
