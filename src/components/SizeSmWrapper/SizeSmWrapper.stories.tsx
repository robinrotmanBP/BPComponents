import type { Meta, StoryObj } from "@storybook/react";
import { SizeSmWrapper } from ".";

const meta: Meta<typeof SizeSmWrapper> = {
  title: "Components/SizeSmWrapper",
  component: SizeSmWrapper,

  argTypes: {
    size: {
      options: ["sm"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SizeSmWrapper>;

export const Default: Story = {
  args: {
    size: "sm",
    className: {},
    line: "/img/line-32.svg",
  },
};
