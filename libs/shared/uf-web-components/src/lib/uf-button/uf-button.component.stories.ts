import type { Meta, StoryObj } from '@storybook/angular';
import { UfButtonComponent } from './uf-button.component';

const meta: Meta<UfButtonComponent> = {
  component: UfButtonComponent,
  title: 'UfButtonComponent',
  argTypes: {
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    round: { control: 'boolean' },
    fontWeight: {
      options: ['normal', 'bold'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<UfButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
    size: 'medium',
    fontWeight: 'normal',
    round: true,
    disabled: false,
    textColor: '#181818',
    backgroundColor: '#ccc',
  },
};
