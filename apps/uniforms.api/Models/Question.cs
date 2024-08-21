using Google.Cloud.Firestore;
using System.Collections.Generic;
namespace Uniforms.Models
{


    [FirestoreData]
    public class Question : BaseEntity
    {

        [FirestoreProperty]
        public string? FormID { get; set; }  // Foreign Key - Form

        [FirestoreProperty]
        public string? QuestionText { get; set; }

        [FirestoreProperty]
        public string? QuestionType { get; set; }  // E.g., Multiple choice, short answer, etc.

        [FirestoreProperty]
        public List<Option>? Options { get; set; }  // Provided options, if any

        [FirestoreProperty]
        public bool IsRequired { get; set; }

        [FirestoreProperty]
        public List<Tag>? Tags { get; set; }  // Many-to-Many - Tag

        [FirestoreProperty]
        public string? File { get; set; }  // One-to-One - FileUpload
    }
}
