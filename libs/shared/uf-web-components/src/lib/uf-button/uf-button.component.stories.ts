import type { Meta, StoryObj } from '@storybook/angular';
import { UfButtonComponent } from './uf-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfButtonComponent> = {
  component: UfButtonComponent,
  title: 'UfButtonComponent',
};
export default meta;
type Story = StoryObj<UfButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-button works!/gi)).toBeTruthy();
  },
};
