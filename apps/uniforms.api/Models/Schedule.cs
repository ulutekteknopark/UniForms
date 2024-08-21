using Google.Cloud.Firestore;
using System;

namespace Uniforms.Uniforms.Api.Models
{
    public class Schedule : BaseEntity
    {
        [FirestoreProperty]
        public string? ScheduleID { get; set; }

        [FirestoreProperty]
        public string? FormID { get; set; }

        [FirestoreProperty]
        public DateTime StartDate { get; set; }

        [FirestoreProperty]
        public DateTime EndDate { get; set; }
    }
}
