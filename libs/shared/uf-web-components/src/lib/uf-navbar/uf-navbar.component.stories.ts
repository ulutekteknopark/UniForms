import type { Meta, StoryObj } from '@storybook/angular';
import { UfNavbarComponent } from './uf-navbar.component';

const meta: Meta<UfNavbarComponent> = {
  component: UfNavbarComponent,
  title: 'UfNavbarComponent',
  argTypes: {
    brandText: { control: 'text' },
    links: {
      control: {
        type: 'array',
        item: {
          type: 'object',
          fields: {
            label: { control: 'text' },
            url: { control: 'text' },
          },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<UfNavbarComponent>;

export const Primary: Story = {
  args: {
    brandText: 'UniForms',
    links: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Contact', url: '/contact' },
    ],
  },
};
