    using Google.Cloud.Firestore;
    using System.Collections.Generic;


namespace Uniforms.Models
{


    [FirestoreData]
    public class Form
    {
        [FirestoreProperty]
        public int FormID { get; set; }

        [FirestoreProperty]
        public string? FormTitle { get; set; }

        [FirestoreProperty]
        public string? Description { get; set; }

        [FirestoreProperty]
        public int OwnerID { get; set; }  // Foreign Key - User

        [FirestoreProperty]
        public string? Template { get; set; }

        [FirestoreProperty]
        public List<Question>? Questions { get; set; }  // One-to-Many - Question

        [FirestoreProperty]
        public List<Response>? Responses { get; set; }  // One-to-Many - Response

        [FirestoreProperty]
        public List<Tag>? Tags { get; set; }  // Many-to-Many - Tag
    }
}
