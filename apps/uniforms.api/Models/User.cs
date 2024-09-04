using Google.Cloud.Firestore;

namespace Uniforms.Uniforms.Api.Models
{
    [FirestoreData]
    public class User
    {
        [FirestoreProperty]
        public string? UserID { get; set; }  // Kullanıcının benzersiz kimliği
        
        [FirestoreProperty]
        public string? Name { get; set; }  // Kullanıcının adı
        
        [FirestoreProperty]
        public string? Email { get; set; }  // Kullanıcının e-posta adresi
        
        [FirestoreProperty]
        public string? Role { get; set; }  // Kullanıcının rolü (Form sahibi mi yoksa form dolduran mı)
        
        [FirestoreProperty]
        public ICollection<Form>? FormsCreated { get; set; }  // Form sahibinin oluşturduğu formlar listesi
    }

}