import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormAddressComponent } from './uf-form-address.component';

const meta: Meta<UfFormAddressComponent> = {
  component: UfFormAddressComponent,
  title: 'UfFormAddressComponent',
};
export default meta;
type Story = StoryObj<UfFormAddressComponent>;

export const Primary: Story = {
  args: {},
};
