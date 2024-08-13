import type { Meta, StoryObj } from '@storybook/angular';
import { UfEmailInputComponent } from './uf-email-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfEmailInputComponent> = {
  component: UfEmailInputComponent,
  title: 'UfEmailInputComponent',
};
export default meta;
type Story = StoryObj<UfEmailInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-email-input works!/gi)).toBeTruthy();
  },
};
