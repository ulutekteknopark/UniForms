namespace Uniforms.Uniforms.Api.Models
{
    using Google.Cloud.Firestore;
    using System.Collections.Generic;

    [FirestoreData]
    public class Tag
    {
        [FirestoreProperty]
        public string TagID { get; set; }

        [FirestoreProperty]
        public string Name { get; set; }

        [FirestoreProperty]
        public List<Form> AssociatedForms { get; set; }

        [FirestoreProperty]
        public List<Questions> AssociatedQuestions { get; set; }
    }
}