using Google.Cloud.Firestore;

namespace Uniforms.Uniforms.Api.Models
{
    [FirestoreData]
    public class Response
    {
        [FirestoreProperty]
        public string? ResponseID { get; set; }  // Yanıtın benzersiz kimliği
        
        [FirestoreProperty]
        public string? FormID { get; set; }  // Yanıtın ait olduğu formun kimliği (Foreign Key - Form)
        
        [FirestoreProperty]
        public string? UserID { get; set; }  // Yanıtı gönderen kullanıcının kimliği (Foreign Key - User)
        
        [FirestoreProperty]
        public ICollection<string>? Answers { get; set; }  // Her bir soru için verilen cevapların listesi
    }

}