import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormElementSelectButtonComponent } from './uf-form-element-select-button.component';

const meta: Meta<UfFormElementSelectButtonComponent> = {
  component: UfFormElementSelectButtonComponent,
  title: 'UfFormElementSelectButtonComponent',
};
export default meta;
type Story = StoryObj<UfFormElementSelectButtonComponent>;

export const Primary: Story = {
  args: {},
};
