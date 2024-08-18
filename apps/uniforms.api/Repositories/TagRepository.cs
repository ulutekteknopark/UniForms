using Google.Cloud.Firestore;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories
{
  public class TagRepository : ITagRepository
  {

    string projectId;
    FirestoreDb firestoreDb;

    public TagRepository()
    {
        string filepath = "C:\\Users\\furka\\OneDrive\\Masaüstü\\UniformsMain\\UniFormsYeni\\UniForms\\apps\\uniforms.api\\uniforms-10a55-ccb60f589255.json";
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
        projectId = "uniforms-10a55";
        firestoreDb = FirestoreDb.Create(projectId);
    }

    public async Task CreateTagAsync(Tag tag)
    {
      var colRef = firestoreDb.Collection("Tags").Document(tag.TagID);
      await colRef.SetAsync(tag);
    }

    public async Task<Tag?> GetTagByIdAsync(string tagId)
    {
        var docRef = firestoreDb.Collection("Tags").Document(tagId);
        var snapshot = await docRef.GetSnapshotAsync();
        return snapshot.Exists ? snapshot.ConvertTo<Tag>() : null;
    }

    public async Task UpdateTagAsync(Tag tag)
    {
      var docRef = firestoreDb.Collection("Tags").Document(tag.TagID);
      await docRef.SetAsync(tag);
    }

    public async Task DeleteTagAsync(string tagId)
    {
      var docRef = firestoreDb.Collection("Tags").Document(tagId);
      await docRef.DeleteAsync();
    }
  }
}