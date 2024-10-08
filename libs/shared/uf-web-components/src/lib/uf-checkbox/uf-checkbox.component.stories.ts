import type { Meta, StoryObj } from '@storybook/angular';
import { UfCheckboxComponent } from './uf-checkbox.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfCheckboxComponent> = {
  component: UfCheckboxComponent,
  title: 'UfCheckboxComponent',
};
export default meta;
type Story = StoryObj<UfCheckboxComponent>;

export const Primary: Story = {
  args: {
    title: "Default",
  },
};
