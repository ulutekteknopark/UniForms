import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormInputComponent } from './uf-form-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfFormInputComponent> = {
  component: UfFormInputComponent,
  title: 'UfFormInputComponent',
};
export default meta;
type Story = StoryObj<UfFormInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-form-input works!/gi)).toBeTruthy();
  },
};
