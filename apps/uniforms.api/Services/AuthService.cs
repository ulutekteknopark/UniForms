using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;

public class FirebaseService
{
    private static readonly Lazy<FirebaseApp> _firebaseApp = new Lazy<FirebaseApp>(() =>
    {
        FirebaseApp.Create(new AppOptions
        {
            Credential = GoogleCredential.FromFile("./uniforms-10a55-894a19c6ae23.json")
        });
        return FirebaseApp.DefaultInstance;
    });

    public static FirebaseApp FirebaseApp => _firebaseApp.Value;
    public static FirebaseAuth Auth => FirebaseAuth.GetAuth(FirebaseApp);
}
