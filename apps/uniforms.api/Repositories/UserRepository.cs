using Google.Cloud.Firestore;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories
{
  public class UserRepository : IUserRepository
  {

    string projectId;
    FirestoreDb firestoreDb;

    public UserRepository()
    {
        string filepath = "./uniforms.api\\uniforms-10a55-894a19c6ae23.json";
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
        projectId = "uniforms-10a55";
        firestoreDb = FirestoreDb.Create(projectId);
    }

    public async Task CreateUserAsync(User user)
    {
      var colRef = firestoreDb.Collection("Users").Document(user.UserID);
      await colRef.SetAsync(user);
    }

    public async Task<User?> GetUserByIdAsync(string userId)
    {
        var docRef = firestoreDb.Collection("Users").Document(userId);
        var snapshot = await docRef.GetSnapshotAsync();
        return snapshot.Exists ? snapshot.ConvertTo<User>() : null;
    }

    public async Task UpdateUserAsync(User user)
    {
      var docRef = firestoreDb.Collection("Users").Document(user.UserID);
      await docRef.SetAsync(user);
    }

    public async Task DeleteUserAsync(string userId)
    {
      var docRef = firestoreDb.Collection("Users").Document(userId);
      await docRef.DeleteAsync();
    }
  }
}