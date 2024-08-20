namespace UniForms.Uniforms.Api.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using Google.Cloud.Firestore;

    [FirestoreData]
    public class Template
    {
        [FirestoreProperty]
        [Key]
        public string TemplateID { get; set; }

        [FirestoreProperty]
        public string TemplateName { get; set; }

        [FirestoreProperty]
        public List<Question> DefaultQuestions { get; set; }
    }

    [FirestoreData]
    public class Question
    {
        [FirestoreProperty]
        [Key]
        public string QuestionID { get; set; }

        [FirestoreProperty]
        public string QuestionText { get; set; }
    }
}
