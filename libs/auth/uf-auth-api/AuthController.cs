using Microsoft.AspNetCore.Mvc;

namespace Uniforms.Auth.UfAuthApi;


[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{

    [HttpPost(Name = "Login")]
    public ActionResult Login()
    {
        return Ok();
    }
}
