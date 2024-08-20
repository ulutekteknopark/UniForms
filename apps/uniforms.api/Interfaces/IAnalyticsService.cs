using UniForms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface IAnalyticsService
    {
        Task<string> CreateAnalyticsAsync(Analytics analytics);
        Task<Analytics?> GetAnalyticsByIdAsync(string analyticsId);
        Task UpdateAnalyticsAsync(string formID, Analytics updatedAnalytics);
        Task DeleteAnalyticsAsync(string id);
    }
}
