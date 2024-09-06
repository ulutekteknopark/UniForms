using FirebaseAdmin.Auth;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        try
        {
            var userRecord = await FirebaseService.Auth.CreateUserAsync(new UserRecordArgs
            {
                Email = request.Email,
                Password = request.Password,
            });
            return Ok(new { UserId = userRecord.Uid });
        }
        catch (Exception ex)
        {
            return BadRequest(new { Error = ex.Message });
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        try
        {
            var signInUri = $"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgirDhNXnxysLHAqSl8rHokmoFmpznrfQ";

            var signInPayload = new
            {
                email = request.Email,
                password = request.Password,
                returnSecureToken = true
            };

            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.PostAsJsonAsync(signInUri, signInPayload);
                if (!response.IsSuccessStatusCode)
                {
                    return Unauthorized(new { Error = "Invalid email or password." });
                }

                var signInResult = await response.Content.ReadFromJsonAsync<SignInResponse>();
                var uid = signInResult.LocalId;

                var customToken = await FirebaseService.Auth.CreateCustomTokenAsync(uid);

                return Ok(new { Token = customToken });
            }
        }
        catch (Exception exception)
        {
            return BadRequest(new { Error = exception.Message });
        }
    }

    // Google ile login çalışabilmesi için front-end'den alınacak idToken'in /google-login API
    // aracılığıyla back-end'e gönderlilmesi gerekmektedir.
    [HttpPost("google-login")]
    public async Task<IActionResult> GoogleLogin([FromBody] GoogleLoginRequest request)
    {
        try
        {
            var payload = await GoogleJsonWebSignature.ValidateAsync(request.IdToken);

            var uid = payload.Subject;

            var customToken = await FirebaseService.Auth.CreateCustomTokenAsync(uid);

            return Ok(new { Token = customToken });
        }
        catch (Exception ex)
        {
            return BadRequest(new { Error = ex.Message });
        }
    }
}

public class RegisterRequest
{
    public string? Email { get; set; }
    public string? Password { get; set; }
}

public class LoginRequest
{
    public string? Email { get; set; }
    public string? Password { get; set; }
}

public class GoogleLoginRequest
{
    public string? IdToken { get; set; }
}

public class SignInResponse
{
    public string? IdToken { get; set; }
    public string? LocalId { get; set; }
    public string? Email { get; set; }
    public string? RefreshToken { get; set; }
    public string? ExpiresIn { get; set; }
}
