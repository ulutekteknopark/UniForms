import type { Meta, StoryObj } from '@storybook/angular';
import { UfFacebookLoginButtonComponent } from './uf-facebook-login-button.component';

const meta: Meta<UfFacebookLoginButtonComponent> = {
  component: UfFacebookLoginButtonComponent,
  title: 'UfGoogleLoginButtonComponent',
};
export default meta;
type Story = StoryObj<UfFacebookLoginButtonComponent>;

export const Primary: Story = {
  args: {},
};
