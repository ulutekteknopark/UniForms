using Google.Cloud.Firestore;

namespace Uniforms.Uniforms.Api.Models
{
    [FirestoreData]
    public class Question
    {
        [FirestoreProperty]
        public string? QuestionID { get; set; }  // Sorunun benzersiz kimliği
        
        [FirestoreProperty]
        public string? FormID { get; set; }  // Sorunun bağlı olduğu formun kimliği (Foreign Key - Form)
        
        [FirestoreProperty]
        public string? QuestionText { get; set; }  // Sorunun metni
        
        [FirestoreProperty]
        public string? QuestionType { get; set; }  // Sorunun tipi (Çoktan seçmeli, kısa yanıt, vb.)
        
        [FirestoreProperty]
        public ICollection<string>? Options { get; set; }  // Soruya verilen seçenekler (varsa)
        
        [FirestoreProperty]
        public bool IsRequired { get; set; }  // Sorunun zorunlu olup olmadığı
        
        [FirestoreProperty]
        public string? File { get; set; }  // Soruya eklenen resim veya dosya (varsa)
    }

}