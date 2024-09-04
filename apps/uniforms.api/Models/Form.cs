using Google.Cloud.Firestore;

namespace Uniforms.Uniforms.Api.Models
{
    [FirestoreData]
        public class Form
    {
        [FirestoreProperty]
        public string? FormID { get; set; }  // Formun benzersiz kimliği
        
        [FirestoreProperty]
        public string? FormTitle { get; set; }  // Formun başlığı
        
        [FirestoreProperty]
        public string? Description { get; set; }  // Formun açıklaması
        
        [FirestoreProperty]
        public string? OwnerID { get; set; }  // Form sahibinin kimliği (Foreign Key - User)
        
        [FirestoreProperty]
        public string? Template { get; set; }  // Formun temel şablonu (anket, başvuru formu vb.)
        
        [FirestoreProperty]
        public ICollection<Question>? Questions { get; set; }  // Formda yer alan soruların listesi
        
        [FirestoreProperty]
        public ICollection<Response>? Responses { get; set; }  // Formda toplanan cevaplar
        
        public ICollection<Tag>? Tags { get; set; }  // Formları kategorize ve filtrelemek için kullanılan etiketler
    }

}