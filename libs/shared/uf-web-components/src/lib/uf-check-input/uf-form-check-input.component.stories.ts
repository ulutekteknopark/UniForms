import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormCheckInputComponent } from './uf-form-check-input.component';

const meta: Meta<UfFormCheckInputComponent> = {
  component: UfFormCheckInputComponent,
  title: 'UfFormCheckInputComponent',
};
export default meta;
type Story = StoryObj<UfFormCheckInputComponent>;

export const Primary: Story = {
  args: {},
};
