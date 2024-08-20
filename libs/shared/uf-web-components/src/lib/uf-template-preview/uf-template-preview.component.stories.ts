import type { Meta, StoryObj } from '@storybook/angular';
import { UfTemplatePreviewComponent } from './uf-template-preview.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UfTemplatePreviewComponent> = {
  component: UfTemplatePreviewComponent,
  title: 'UfTemplatePreviewComponent',
};
export default meta;
type Story = StoryObj<UfTemplatePreviewComponent>;

export const Primary: Story = {
  args: {
    previewImage: "https://via.placeholder.com/400x300",
    templateName: "Şablon Adı"
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/uf-template-preview works!/gi)).toBeTruthy();
  },
};
