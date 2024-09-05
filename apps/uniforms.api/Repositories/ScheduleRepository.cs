using Google.Cloud.Firestore;
using System.Threading.Tasks;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories
{
    public class ScheduleRepository(FirestoreDb firestoreDb) : IScheduleRepository
    {
        private readonly FirestoreDb _firestoreDb = firestoreDb;

        public async Task CreateScheduleAsync(Schedule schedule)
        {
            DocumentReference docRef = _firestoreDb.Collection("Schedules").Document();
            schedule.Id = docRef.Id;
            await docRef.SetAsync(schedule);
        }

        public async Task<Schedule> GetScheduleByIdAsync(string scheduleId)
        {
            DocumentReference docRef = _firestoreDb.Collection("Schedules").Document(scheduleId);
            DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

            if (snapshot.Exists)
            {
                return snapshot.ConvertTo<Schedule>();
            }

            return null;
        }

        public async Task UpdateScheduleAsync(Schedule schedule)
        {
            DocumentReference docRef = _firestoreDb.Collection("Schedules").Document(schedule.Id);
            await docRef.SetAsync(schedule, SetOptions.MergeAll);
        }

        public async Task DeleteScheduleAsync(string scheduleId)
        {
            DocumentReference docRef = _firestoreDb.Collection("Schedules").Document(scheduleId);
            await docRef.DeleteAsync();
        }
    }
}
