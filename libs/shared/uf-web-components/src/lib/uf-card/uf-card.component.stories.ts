import type { Meta, StoryObj } from '@storybook/angular';
import { UfCardComponent } from './uf-card.component';

const meta: Meta<UfCardComponent> = {
  component: UfCardComponent,
  title: 'UfCardComponent',
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    image: { control: 'text' },
    rounded: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<UfCardComponent>;

export const Primary: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the card content.',
    rounded: false,
    image: '',
    backgroundColor: '#ccc',
    textColor: '#181818',
  },
};
