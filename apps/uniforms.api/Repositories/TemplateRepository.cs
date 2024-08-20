using Google.Cloud.Firestore;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;
using System;
using System.Threading.Tasks;

namespace Uniforms.Uniforms.Api.Repositories
{
    public class TemplateRepository : ITemplateRepository
    {
        private readonly FirestoreDb _firestoreDb;

        public TemplateRepository()
        {
            string filepath = "C:\\Users\\Oguzhan\\Desktop\\form\\UniForms\\apps\\uniforms.api\\uniforms-10a55-ccb60f589255.json";
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", filepath);
            string projectId = "uniforms-10a55";
            _firestoreDb = FirestoreDb.Create(projectId);
        }

        public async Task CreateTemplateAsync(Template template)
        {
            var docRef = _firestoreDb.Collection("Templates").Document(template.TemplateID);
            await docRef.SetAsync(template);
        }

        public async Task<Template?> GetTemplateByIdAsync(string templateId)
        {
            var docRef = _firestoreDb.Collection("Templates").Document(templateId);
            var snapshot = await docRef.GetSnapshotAsync();
            return snapshot.Exists ? snapshot.ConvertTo<Template>() : null;
        }

        public async Task UpdateTemplateAsync(Template template)
        {
            var docRef = _firestoreDb.Collection("Templates").Document(template.TemplateID);
            await docRef.SetAsync(template);
        }

        public async Task DeleteTemplateAsync(string templateId)
        {
            var docRef = _firestoreDb.Collection("Templates").Document(templateId);
            await docRef.DeleteAsync();
        }
    }
}
