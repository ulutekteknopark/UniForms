using Google.Cloud.Firestore;
using YourNamespace.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace YourNamespace.Data
{
    public class SubmissionRepository
    {
        private readonly FirestoreDb _firestoreDb;

        public SubmissionRepository(string projectId, string jsonCredentialsPath)
        {
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", jsonCredentialsPath);
            _firestoreDb = FirestoreDb.Create(projectId);
        }

        public async Task<Submission> GetSubmissionByIdAsync(string id)
    {
      DocumentReference docRef = _firestoreDb.Collection("Submissions").Document(id);
      DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

      if (!snapshot.Exists)
      {
        return null;
      }
      Submission submission = snapshot.ConvertTo<Submission>();
      return submission;
    }

    public async Task<string> CreateSubmissionAsync(Submission submission)
        {
            DocumentReference docRef = await _firestoreDb.Collection("Submissions").AddAsync(submission);
            return docRef.Id;
        }

        public async Task<bool> UpdateSubmissionAsync(Submission submission)
        {
            DocumentReference docRef = _firestoreDb.Collection("Submissions").Document(submission.SubmissionID);
            DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

            if (snapshot.Exists)
            {
                await docRef.SetAsync(submission, SetOptions.Overwrite);
                return true;
            }
            return false;
        }

        public async Task<bool> DeleteSubmissionAsync(string id)
        {
            DocumentReference docRef = _firestoreDb.Collection("Submissions").Document(id);
            DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

            if (snapshot.Exists)
            {
                await docRef.DeleteAsync();
                return true;
            }
            return false;
        }
    }

  internal class DocumentSnapshot
  {
    internal T ConvertTo<T>()
    {
      throw new NotImplementedException();
    }
  }

  internal class DocumentReference
  {
  }
}
