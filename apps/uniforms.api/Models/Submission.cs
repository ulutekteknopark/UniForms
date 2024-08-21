using Google.Cloud.Firestore;

namespace Uniforms.Models
{
    [FirestoreData]
    public class Submission
    {
        [FirestoreDocumentId]
        public string SubmissionID { get; set; }

        [FirestoreProperty]
        public string FormID { get; set; }

        [FirestoreProperty]
        public string? SubmittedBy { get; set; }

        [FirestoreProperty]
        public DateTime SubmittedAt { get; set; }

        [FirestoreProperty]
        public string? ResponseData { get; set; }
    }

  internal class FirestoreDataAttribute : Attribute
  {
  }

  internal class FirestoreDocumentIdAttribute : Attribute
  {
  }

  internal class FirestorePropertyAttribute : Attribute
  {
  }
}