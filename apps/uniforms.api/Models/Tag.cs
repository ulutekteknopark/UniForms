using Google.Cloud.Firestore;
using System.Collections.Generic;

namespace Uniforms.Models
{


    [FirestoreData]
    public class Tag
    {
        [FirestoreProperty]
        public string? TagID { get; set; }

        [FirestoreProperty]
        public string? Name { get; set; }

        [FirestoreProperty]
        public List<Form>? AssociatedForms { get; set; }

        [FirestoreProperty]
        public List<Question>? AssociatedQuestions { get; set; }
    }
}