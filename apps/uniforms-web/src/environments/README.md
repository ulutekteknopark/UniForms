Create environment.ts file with the following content

```
export const environment = {
  production: false,
  firebase: {
    apiKey: 'FIREBASE_API_KEY',
    authDomain: 'appname.firebaseapp.com',
    projectId: 'appname',
    storageBucket: 'appname.appspot.com',
    messagingSenderId: 'APP_ID',
    appId: 'APP_ID',
  },
};
```
