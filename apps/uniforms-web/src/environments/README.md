`uniforms/apps/uniforms-web/src/environments` klasöründe bir `environment.ts` dosyası oluşturun. Firebase hesabı oluşturduktan sonra, Firebase Console'dan alacağınız bilgilerle dosyayı aşağıdaki gibi doldurun:

```
export const environment = {
  production: false,
  firebase: {
    apiKey: '[FIREBASE_API_KEY]',
    authDomain: '[PROJECT_ID].firebaseapp.com',
    projectId: '[PROJECT_ID]',
    storageBucket: '[PROJECT_ID].appspot.com',
    messagingSenderId: 'APP_ID',
    appId: 'APP_ID',
  },
};
```
