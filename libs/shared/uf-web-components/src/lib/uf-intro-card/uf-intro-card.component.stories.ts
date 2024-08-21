import type { Meta, StoryObj } from '@storybook/angular';
import { UfIntroCardComponent } from './uf-intro-card.component';

const meta: Meta<UfIntroCardComponent> = {
  component: UfIntroCardComponent,
  title: 'UfIntroCardComponent',
};
export default meta;
type Story = StoryObj<UfIntroCardComponent>;

export const Primary: Story = {
  args: {},
};
