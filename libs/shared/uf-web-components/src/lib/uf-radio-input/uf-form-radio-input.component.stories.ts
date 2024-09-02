import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormRadioInputComponent } from './uf-form-radio-input.component';

const meta: Meta<UfFormRadioInputComponent> = {
  component: UfFormRadioInputComponent,
  title: 'UfFormRadioInputComponent',
};
export default meta;
type Story = StoryObj<UfFormRadioInputComponent>;

export const Primary: Story = {
  args: {},
};
