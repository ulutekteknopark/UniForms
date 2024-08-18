namespace Uniforms.Uniforms.Api.Models
{
    using Google.Cloud.Firestore;
    using System.Collections.Generic;

    [FirestoreData]
    public class Questions
    {
        [FirestoreProperty]
        public string QuestionID { get; set; }

        [FirestoreProperty]
        public string FormID { get; set; }  // Foreign Key - Form

        [FirestoreProperty]
        public string QuestionText { get; set; }

        [FirestoreProperty]
        public string QuestionType { get; set; }  // E.g., Multiple choice, short answer, etc.

        [FirestoreProperty]
        public List<string> Options { get; set; }  // Provided options, if any

        [FirestoreProperty]
        public bool IsRequired { get; set; }

        [FirestoreProperty]
        public List<string> Tags { get; set; }  // Many-to-Many - Tag

        [FirestoreProperty]
        public string File { get; set; }  // One-to-One - FileUpload
    }
}
