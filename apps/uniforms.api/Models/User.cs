namespace UniForms.Uniforms.Api.Models
{
    public class User
    {
        public Guid UserID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Role { get; set; } // "Oluşturan" ya da "Yanıtlayan"
        public List<Form> FormsCreated { get; set; } = new List<Form>();
    }
}
