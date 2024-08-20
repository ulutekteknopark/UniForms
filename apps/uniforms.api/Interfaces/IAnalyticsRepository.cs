using System.Threading.Tasks;
using UniForms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Repositories;
public interface IAnalyticsRepository
{
    Task<string> CreateAnalyticsAsync(Analytics analytics);
    Task UpdateAnalyticsAsync(string formID, Analytics updatedAnalytics);
    Task DeleteAnalyticsAsync(string id);
    Task<Analytics> GetAnalyticsByIdAsync(string id);
}