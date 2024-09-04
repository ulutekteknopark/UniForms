using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Services
{
    public class ResponseService : IResponseService
    {
        private readonly IResponseRepository _responseRepository;
        public ResponseService(IResponseRepository responseRepository)
        {
            _responseRepository = responseRepository;
        }

    public async Task CreateResponseAsync(Response response)
    {
      await _responseRepository.CreateResponseAsync(response);
    }

    public async Task<Response?> GetResponseByIdAsync(string responseId)
    {
        return await _responseRepository.GetResponseByIdAsync(responseId);
    }

    public async Task UpdateResponseAsync(Response response)
    {
      await _responseRepository.UpdateResponseAsync(response);
    }

    public async Task DeleteResponseAsync(string responseId)
    {
      await _responseRepository.DeleteResponseAsync(responseId);
    }
  }
}