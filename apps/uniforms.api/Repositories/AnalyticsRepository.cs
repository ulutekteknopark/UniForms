using Google.Cloud.Firestore;
using UniForms.Uniforms.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uniforms.Uniforms.Api.Repositories;

namespace Uniforms.Uniforms.Api.Interfaces;
public class AnalyticsRepository : IAnalyticsRepository
{
    private readonly FirestoreDb _firestoreDb;
    private const string CollectionName = "analytics";

    public AnalyticsRepository(FirestoreDb firestoreDb)
    {
        _firestoreDb = firestoreDb ?? throw new ArgumentNullException(nameof(firestoreDb));
    }

    public async Task<string> CreateAnalyticsAsync(Analytics analytics)
    {
        try
        {
            string newFormId = Guid.NewGuid().ToString();
            analytics.FormID = newFormId;
            analytics.TotalResponses = 0;
            analytics.ResponseRate = 0.0;
            analytics.AverageCompletionTime = 0.0;

            DocumentReference docRef = _firestoreDb.Collection(CollectionName).Document(newFormId);
            await docRef.SetAsync(analytics);

            return newFormId;
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while creating Analytics", ex);
        }
    }

    public async Task UpdateAnalyticsAsync(string formID, Analytics updatedAnalytics)
    {
        try
        {
            DocumentReference docRef = _firestoreDb.Collection(CollectionName).Document(formID);
            await docRef.SetAsync(updatedAnalytics, SetOptions.MergeAll);
        }
        catch (Exception ex)
        {
            throw new Exception($"An error occurred while updating Analytics with FormID {formID}", ex);
        }
    }

    public async Task DeleteAnalyticsAsync(string id)
    {
        try
        {
            await _firestoreDb.Collection(CollectionName).Document(id).DeleteAsync();
        }
        catch (Exception ex)
        {
            throw new Exception($"An error occurred while deleting Analytics with ID {id}", ex);
        }
    }

    public async Task<Analytics> GetAnalyticsByIdAsync(string id)
    {
        try
        {
            DocumentSnapshot snapshot = await _firestoreDb.Collection(CollectionName).Document(id).GetSnapshotAsync();
            if (snapshot.Exists)
            {
                return snapshot.ConvertTo<Analytics>();
            }
            return null;
        }
        catch (Exception ex)
        {
            throw new Exception($"An error occurred while retrieving Analytics with ID {id}", ex);
        }
    }
}
