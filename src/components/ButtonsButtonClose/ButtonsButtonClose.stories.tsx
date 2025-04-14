import type { Meta, StoryObj } from "@storybook/react";
import { ButtonsButtonClose } from ".";
import React from "react";
import "./storybook.css";

const meta: Meta<typeof ButtonsButtonClose> = {
  title: "Components/ButtonsButtonClose",
  component: ButtonsButtonClose,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    darkBackground: {
      control: "boolean",
    },
    stateProp: {
      control: "radio",
      options: ["default", "focused", "hover"],
    },
  },
  args: {
    size: "md",
    darkBackground: false,
    stateProp: "default",
  },
};

export default meta;

type Story = StoryObj<typeof ButtonsButtonClose>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const Focused: Story = { args: { stateProp: "focused" } };
export const Hover: Story = { args: { stateProp: "hover" } };

export const LightSm: Story = { args: { size: "sm", darkBackground: false } };
export const DarkLgHover: Story = { args: { size: "lg", darkBackground: true, stateProp: "hover" } };

