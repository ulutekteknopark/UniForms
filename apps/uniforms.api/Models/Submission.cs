using Google.Cloud.Firestore;

namespace Uniforms.Models
{
    [FirestoreData]
    public class Submission
    {
        [FirestoreDocumentId]
        public int SubmissionID { get; set; }

        [FirestoreProperty]
        public int FormID { get; set; }

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