import type { Meta, StoryObj } from '@storybook/angular';
import { UfGoogleLoginButtonComponent } from './uf-google-login-button.component';

const meta: Meta<UfGoogleLoginButtonComponent> = {
  component: UfGoogleLoginButtonComponent,
  title: 'UfGoogleLoginButtonComponent',
};
export default meta;
type Story = StoryObj<UfGoogleLoginButtonComponent>;

export const Primary: Story = {
  args: {},
};
