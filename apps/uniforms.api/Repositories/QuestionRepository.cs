using Google.Cloud.Firestore;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories
{
  public class QuestionRepository : IQuestionRepository
  {

    string projectId;
    FirestoreDb firestoreDb;

    public QuestionRepository()
    {
        string filepath = "C:\\Users\\furka\\OneDrive\\Masaüstü\\UniformsMerge\\UniForms\\apps\\uniforms.api\\uniforms-10a55-894a19c6ae23.json";
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
        projectId = "uniforms-10a55";
        firestoreDb = FirestoreDb.Create(projectId);
    }

    public async Task CreateQuestionAsync(Question question)
    {
      var colRef = firestoreDb.Collection("Questions").Document(question.QuestionID);
      await colRef.SetAsync(question);
    }

    public async Task<Question?> GetQuestionByIdAsync(string questionId)
    {
        var docRef = firestoreDb.Collection("Questions").Document(questionId);
        var snapshot = await docRef.GetSnapshotAsync();
        return snapshot.Exists ? snapshot.ConvertTo<Question>() : null;
    }

    public async Task UpdateQuestionAsync(Question question)
    {
      var docRef = firestoreDb.Collection("Questions").Document(question.QuestionID);
      await docRef.SetAsync(question);
    }

    public async Task DeleteQuestionAsync(string questionId)
    {
      var docRef = firestoreDb.Collection("Questions").Document(questionId);
      await docRef.DeleteAsync();
    }
  }
}