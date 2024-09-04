using Google.Cloud.Firestore;

namespace Uniforms.Uniforms.Api.Models
{
    [FirestoreData]
    public class Template
    {
        [FirestoreProperty]
        public string? TemplateID { get; set; }  // Şablonun benzersiz kimliği
        
        [FirestoreProperty]
        public string? TemplateName { get; set; }  // Şablonun adı (örneğin, anket, başvuru formu)
        
        [FirestoreProperty]
        public ICollection<Question>? DefaultQuestions { get; set; }  // Şablonla birlikte gelen varsayılan soruların listesi
    }

}