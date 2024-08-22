import type { Meta, StoryObj } from '@storybook/angular';
import { UfTextareaComponent } from './uf-textarea.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfTextareaComponent> = {
  component: UfTextareaComponent,
  title: 'UfTextareaComponent',
};
export default meta;
type Story = StoryObj<UfTextareaComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-textarea works!/gi)).toBeTruthy();
  },
};
