import { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

export const decorators = [
  applicationConfig({
    providers: [
      provideAnimations(),
    ],
  }),
];

const preview: Preview = {
  parameters: {
    // Additional parameters if needed
  },
};

export default preview;
