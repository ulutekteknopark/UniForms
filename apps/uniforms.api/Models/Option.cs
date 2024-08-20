    using Google.Cloud.Firestore;
    using System.Collections.Generic;


namespace Uniforms.Models
{


    [FirestoreData]
    public class Option:BaseEntity
    {

        // summary
        // The name of the option
        [FirestoreProperty]
        public string? Name { get; set; }

        // summary
        // The value of the option
        [FirestoreProperty]
        public string? Value { get; set; }

        // summary
        // The question ID of the option
        [FirestoreProperty]
        public int QuestionID { get; set; }
    }
}