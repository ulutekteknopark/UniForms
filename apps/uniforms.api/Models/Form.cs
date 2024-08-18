namespace Uniforms.Uniforms.Api.Models
{
    using Google.Cloud.Firestore;
    using System.Collections.Generic;

    [FirestoreData]
    public class Form
    {
        [FirestoreProperty]
        public string FormID { get; set; }

        [FirestoreProperty]
        public string FormTitle { get; set; }

        [FirestoreProperty]
        public string Description { get; set; }

        [FirestoreProperty]
        public string OwnerID { get; set; }  // Foreign Key - User

        [FirestoreProperty]
        public string Template { get; set; }

        [FirestoreProperty]
        public List<string> Questions { get; set; }  // One-to-Many - Question

        [FirestoreProperty]
        public List<string> Responses { get; set; }  // One-to-Many - Response

        [FirestoreProperty]
        public List<string> Tags { get; set; }  // Many-to-Many - Tag
    }
}
