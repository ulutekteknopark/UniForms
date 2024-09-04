using Google.Cloud.Firestore;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories
{
  public class ResponseRepository : IResponseRepository
  {

    string projectId;
    FirestoreDb firestoreDb;

    public ResponseRepository()
    {
        string filepath = "C:\\Users\\furka\\OneDrive\\Masaüstü\\UniformsMerge\\UniForms\\apps\\uniforms.api\\uniforms-10a55-894a19c6ae23.json";
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
        projectId = "uniforms-10a55";
        firestoreDb = FirestoreDb.Create(projectId);
    }

    public async Task CreateResponseAsync(Response response)
    {
      var colRef = firestoreDb.Collection("Responses").Document(response.ResponseID);
      await colRef.SetAsync(response);
    }

    public async Task<Response?> GetResponseByIdAsync(string responseId)
    {
        var docRef = firestoreDb.Collection("Responses").Document(responseId);
        var snapshot = await docRef.GetSnapshotAsync();
        return snapshot.Exists ? snapshot.ConvertTo<Response>() : null;
    }

    public async Task UpdateResponseAsync(Response response)
    {
      var docRef = firestoreDb.Collection("Responses").Document(response.ResponseID);
      await docRef.SetAsync(response);
    }

    public async Task DeleteResponseAsync(string responseId)
    {
      var docRef = firestoreDb.Collection("Responses").Document(responseId);
      await docRef.DeleteAsync();
    }
  }
}