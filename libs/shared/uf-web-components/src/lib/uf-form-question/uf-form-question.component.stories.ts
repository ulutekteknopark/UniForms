import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormQuestionComponent } from './uf-form-question.component';

const meta: Meta<UfFormQuestionComponent> = {
  component: UfFormQuestionComponent,
  title: 'UfFormQuestionComponent',
};
export default meta;
type Story = StoryObj<UfFormQuestionComponent>;

export const Primary: Story = {
  args: {},
};
