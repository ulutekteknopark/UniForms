import type { Meta, StoryObj } from '@storybook/angular';
import { UfLoginFormComponent } from './uf-login-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfLoginFormComponent> = {
  component: UfLoginFormComponent,
  title: 'UfLoginFormComponent',
};
export default meta;
type Story = StoryObj<UfLoginFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-login-form works!/gi)).toBeTruthy();
  },
};
