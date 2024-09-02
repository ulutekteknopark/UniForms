import type { Meta, StoryObj } from '@storybook/angular';
import { UfDateInputComponent } from './uf-date-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfDateInputComponent> = {
  component: UfDateInputComponent,
  title: 'UfDateInputComponent',
};
export default meta;
type Story = StoryObj<UfDateInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-date-input works!/gi)).toBeTruthy();
  },
};
