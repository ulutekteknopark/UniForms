using Microsoft.AspNetCore.Mvc;
using YourNamespace.Data;
using YourNamespace.Models;
using System.Threading.Tasks;

namespace YourNamespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubmissionsController : ControllerBase
    {
        private readonly SubmissionRepository _repository;

        public SubmissionsController(SubmissionRepository repository)
        {
            _repository = repository;
        }

        // GET: api/Submissions/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Submission>> GetSubmission(string id)
        {
            var submission = await _repository.GetSubmissionByIdAsync(id);

            if (submission == null)
            {
                return NotFound();
            }

            return Ok(submission);
        }

        // POST: api/Submissions
        [HttpPost]
        public async Task<ActionResult<Submission>> PostSubmission(Submission submission)
        {
            submission.SubmittedAt = DateTime.UtcNow;
            var newId = await _repository.CreateSubmissionAsync(submission);
            submission.SubmissionID = newId;

            return CreatedAtAction(nameof(GetSubmission), new { id = newId }, submission);
        }

        // PUT: api/Submissions/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubmission(string id, Submission submission)
        {
            if (id != submission.SubmissionID)
            {
                return BadRequest();
            }

            var updated = await _repository.UpdateSubmissionAsync(submission);
            if (!updated)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE: api/Submissions/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubmission(string id)
        {
            var deleted = await _repository.DeleteSubmissionAsync(id);
            if (!deleted)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
