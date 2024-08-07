import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run uniforms-web:serve:development',
        production: 'nx run uniforms-web:serve:production',
      },
      ciWebServerCommand: 'nx run uniforms-web:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
