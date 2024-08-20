using System.Threading.Tasks;
using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Repositories;
using UniForms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Services
{
    public class AnalyticsService : IAnalyticsService
    {
        private readonly IAnalyticsRepository _analyticsRepository;

        public AnalyticsService(IAnalyticsRepository analyticsRepository)
        {
            _analyticsRepository = analyticsRepository;
        }

        public async Task<string> CreateAnalyticsAsync(Analytics analytics)
        {
            return await _analyticsRepository.CreateAnalyticsAsync(analytics);
        }

        public async Task<Analytics?> GetAnalyticsByIdAsync(string analyticsId)
        {
            return await _analyticsRepository.GetAnalyticsByIdAsync(analyticsId);
        }

        public async Task UpdateAnalyticsAsync(string formID, Analytics updatedAnalytics)
        {
            await _analyticsRepository.UpdateAnalyticsAsync(formID, updatedAnalytics);
        }

        public async Task DeleteAnalyticsAsync(string id)
        {
            await _analyticsRepository.DeleteAnalyticsAsync(id);
        }
    }
}
