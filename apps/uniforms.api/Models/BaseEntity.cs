using Google.Cloud.Firestore;
using System;

namespace Uniforms.Uniforms.Api.Models
{
    public class BaseEntity
    {
        [FirestoreDocumentId] // Bu özellik, Firestore'daki doküman kimliğini temsil eder
        public string? Id { get; set; }

        // Diğer ortak özellikler
        [FirestoreProperty]
        public DateTime CreatedDate { get; set; }

        [FirestoreProperty]
        public DateTime UpdatedDate { get; set; }
    }
}