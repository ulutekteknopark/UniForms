import type { Meta, StoryObj } from '@storybook/angular';
import { UfFormPreviewComponent } from './uf-form-preview.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfFormPreviewComponent> = {
  component: UfFormPreviewComponent,
  title: 'UfFormPreviewComponent',
};
export default meta;
type Story = StoryObj<UfFormPreviewComponent>;

export const Primary: Story = {
  args: {
    formTitle: '',
    responseCount: 0,
  },
};

export const Heading: Story = {
  args: {
    formTitle: '',
    responseCount: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-form-preview works!/gi)).toBeTruthy();
  },
};
