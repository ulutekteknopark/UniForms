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

    // Front-end tarafında yapılacak Facebook ile girişlerde Facebook 'access_token' sunmaktadır.
    // Bu token'in back-end'e gönderilmesi gerekmektedir.
    [HttpPost("facebook-login")]
    public async Task<IActionResult> FacebookLogin([FromBody] FacebookLoginRequest request)
    {
        try
        {
            var fbValidationUrl = $"https://graph.facebook.com/me?access_token={request.AccessToken}&fields=id,email";

            using (var httpClient = new HttpClient())
            {
                var fbResponse = await httpClient.GetAsync(fbValidationUrl);
                if (!fbResponse.IsSuccessStatusCode)
                {
                    return Unauthorized(new { Error = "Invalid Facebook token." });
                }

                var fbUser = await fbResponse.Content.ReadFromJsonAsync<FacebookUserResponse>();
                var uid = fbUser.Id;

                var customToken = await FirebaseService.Auth.CreateCustomTokenAsync(uid);

                return Ok(new { Token = customToken });
            }
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

public class FacebookLoginRequest
{
    public string? AccessToken { get; set; }
}

public class FacebookUserResponse
{
    public string? Id { get; set; }
    public string? Email { get; set; }
}

