using Google.Cloud.Firestore;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories
{
  public class FormRepository : IFormRepository
  {

    string projectId;
    FirestoreDb firestoreDb;

    public FormRepository()
    {
        string filepath = "C:\\Users\\furka\\OneDrive\\Masaüstü\\UniformsMerge\\UniForms\\apps\\uniforms.api\\uniforms-10a55-894a19c6ae23.json";
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
        projectId = "uniforms-10a55";
        firestoreDb = FirestoreDb.Create(projectId);
    }

    public async Task CreateFormAsync(Form form)
    {
      var colRef = firestoreDb.Collection("Forms").Document(form.FormID);
      await colRef.SetAsync(form);
    }

    public async Task<Form?> GetFormByIdAsync(string formId)
    {
        var docRef = firestoreDb.Collection("Forms").Document(formId);
        var snapshot = await docRef.GetSnapshotAsync();
        return snapshot.Exists ? snapshot.ConvertTo<Form>() : null;
    }

    public async Task UpdateFormAsync(Form form)
    {
      var docRef = firestoreDb.Collection("Forms").Document(form.FormID);
      await docRef.SetAsync(form);
    }

    public async Task DeleteFormAsync(string formId)
    {
      var docRef = firestoreDb.Collection("Forms").Document(formId);
      await docRef.DeleteAsync();
    }
  }
}