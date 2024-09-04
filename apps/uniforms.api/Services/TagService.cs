using Uniforms.Uniforms.Api.Interfaces;
using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Services
{
    public class TagService : ITagService
    {
        private readonly ITagRepository _tagRepository;
        public TagService(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

    public async Task CreateTagAsync(Tag tag)
    {
      await _tagRepository.CreateTagAsync(tag);
    }

    public async Task<Tag?> GetTagByIdAsync(string tagId)
    {
        return await _tagRepository.GetTagByIdAsync(tagId);
    }

    public async Task UpdateTagAsync(Tag tag)
    {
      await _tagRepository.UpdateTagAsync(tag);
    }

    public async Task DeleteTagAsync(string tagId)
    {
      await _tagRepository.DeleteTagAsync(tagId);
    }
  }
}