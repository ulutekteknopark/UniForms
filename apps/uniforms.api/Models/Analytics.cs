namespace UniForms.Uniforms.Api.Models;

using System.ComponentModel.DataAnnotations;
using Google.Cloud.Firestore;

[FirestoreData]
public class Analytics
{
    [FirestoreProperty]
    public string FormID { get; set; }

    [FirestoreProperty]
    public int TotalResponses { get; set; }

    [FirestoreProperty]
    public double ResponseRate { get; set; }

    [FirestoreProperty]
    public double AverageCompletionTime { get; set; }
}
