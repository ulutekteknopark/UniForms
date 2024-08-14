import type { Meta, StoryObj } from '@storybook/angular';
import { UfPasswordInputComponent } from './uf-password-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfPasswordInputComponent> = {
  component: UfPasswordInputComponent,
  title: 'UfPasswordInputComponent',
};
export default meta;
type Story = StoryObj<UfPasswordInputComponent>;

export const Primary: Story = {
  args: {
    title: "Şifre",
    placeholder: "Örn: ram@örnek.com",
  },
};
