import type { Meta, StoryObj } from '@storybook/angular';
import { UfDropdownComponent } from './uf-dropdown.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfDropdownComponent> = {
  component: UfDropdownComponent,
  title: 'UfDropdownComponent',
};
export default meta;
type Story = StoryObj<UfDropdownComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-dropdown works!/gi)).toBeTruthy();
  },
};
