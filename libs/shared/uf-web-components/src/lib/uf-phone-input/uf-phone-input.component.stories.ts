import type { Meta, StoryObj } from '@storybook/angular';
import { UfPhoneInputComponent } from './uf-phone-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfPhoneInputComponent> = {
  component: UfPhoneInputComponent,
  title: 'UfPhoneInputComponent',
};
export default meta;
type Story = StoryObj<UfPhoneInputComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-phone-input works!/gi)).toBeTruthy();
  },
};
