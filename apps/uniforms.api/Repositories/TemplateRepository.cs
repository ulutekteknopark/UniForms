using Google.Cloud.Firestore;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories
{
  public class TemplateRepository : ITemplateRepository
  {

    string projectId;
    FirestoreDb firestoreDb;

    public TemplateRepository()
    {
        string filepath = "C:\\Users\\furka\\OneDrive\\Masaüstü\\UniformsMerge\\UniForms\\apps\\uniforms.api\\uniforms-10a55-894a19c6ae23.json";
        Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
        projectId = "uniforms-10a55";
        firestoreDb = FirestoreDb.Create(projectId);
    }

    public async Task CreateTemplateAsync(Template template)
    {
      var colRef = firestoreDb.Collection("Templates").Document(template.TemplateID);
      await colRef.SetAsync(template);
    }

    public async Task<Template?> GetTemplateByIdAsync(string templateId)
    {
        var docRef = firestoreDb.Collection("Templates").Document(templateId);
        var snapshot = await docRef.GetSnapshotAsync();
        return snapshot.Exists ? snapshot.ConvertTo<Template>() : null;
    }

    public async Task UpdateTemplateAsync(Template template)
    {
      var docRef = firestoreDb.Collection("Templates").Document(template.TemplateID);
      await docRef.SetAsync(template);
    }

    public async Task DeleteTemplateAsync(string templateId)
    {
      var docRef = firestoreDb.Collection("Templates").Document(templateId);
      await docRef.DeleteAsync();
    }
  }
}