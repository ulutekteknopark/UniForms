import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormRateInputComponent } from './uf-form-rate-input.component';

const meta: Meta<UfFormRateInputComponent> = {
  component: UfFormRateInputComponent,
  title: 'UfFormRateInputComponent',
};
export default meta;
type Story = StoryObj<UfFormRateInputComponent>;

export const Primary: Story = {
  args: {},
};
