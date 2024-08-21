using Google.Cloud.Firestore;

namespace Uniforms.Uniforms.Api.Models
{
    [FirestoreData]
    public class Answer
    {
        [FirestoreProperty]
        public string? QuestionID { get; set; }  // Cevap verilen sorunun kimliği

        [FirestoreProperty]
        public string? AnswerText { get; set; }  // Cevap metni
    }
}
