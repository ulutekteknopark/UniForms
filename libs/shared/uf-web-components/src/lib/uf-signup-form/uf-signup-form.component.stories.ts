import type { Meta, StoryObj } from '@storybook/angular';
import { UfSignupFormComponent } from './uf-signup-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfSignupFormComponent> = {
  component: UfSignupFormComponent,
  title: 'UfSignupFormComponent',
};
export default meta;
type Story = StoryObj<UfSignupFormComponent>;

export const Primary: Story = {
  args: {},
};
