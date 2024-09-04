using Uniforms.Uniforms.Api.Models;

namespace Uniforms.Uniforms.Api.Interfaces
{
    public interface ITagRepository
    {
        Task CreateTagAsync(Tag tag);
        Task<Tag?> GetTagByIdAsync(string tagId);
        Task UpdateTagAsync(Tag tag);
        Task DeleteTagAsync(string tagId);
    }
}