import { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';

export const decorators = [
  applicationConfig({
    providers: [
      provideAnimations(),
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          lang: 'en',
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '312389062199-iaeg6q2k9dt5jm2gs0k4lrukra2vbl1q.apps.googleusercontent.com'
              )
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('804832595141171')
            }
          ],
          onError: (err) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig,
      }
    ],
  }),
];

const preview: Preview = {
  parameters: {
    // Additional parameters if needed
  },
};

export default preview;
