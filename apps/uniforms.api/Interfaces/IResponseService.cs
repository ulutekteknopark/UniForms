using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface IResponseService
    {
        Task CreateResponseAsync(Response response);
        Task<Response?> GetResponseByIdAsync(string responseId);
        Task UpdateResponseAsync(Response response);
        Task DeleteResponseAsync(string responseId);
    }
}