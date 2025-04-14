import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // optional for SB docs addon
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    className: 'bg-blue-500 text-white px-4 py-2 rounded',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    className: 'bg-gray-200 text-black px-4 py-2 rounded',
  },
};
