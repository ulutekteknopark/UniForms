using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using UniForms.Uniforms.Api.Models;
using Uniforms.Uniforms.Api.Interfaces;

[ApiController]
[Route("api/[controller]")]
public class AnalyticsController : ControllerBase
{
    private readonly IAnalyticsService _analyticsService;

    public AnalyticsController(IAnalyticsService analyticsService)
    {
        _analyticsService = analyticsService;
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateAnalytics(Analytics analytics)
    {
        var id = await _analyticsService.CreateAnalyticsAsync(analytics);
        return CreatedAtAction(nameof(GetAnalytics), new { id = id }, analytics);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Analytics>> GetAnalytics(string id)
    {
        var analytics = await _analyticsService.GetAnalyticsByIdAsync(id);
        if (analytics == null)
        {
            return NotFound();
        }
        return Ok(analytics);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAnalytics(string id, Analytics analytics)
    {
        if (id != analytics.FormID)
        {
            return BadRequest("ID in the URL and ID in the body must match.");
        }
        await _analyticsService.UpdateAnalyticsAsync(id, analytics);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAnalytics(string id)
    {
        await _analyticsService.DeleteAnalyticsAsync(id);
        return NoContent();
    }
}
