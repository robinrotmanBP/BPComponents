import type { Meta, StoryObj } from "@storybook/react";
import { ButtonsButtonClose } from ".";
import React from 'react';
import './storybook.css';

const meta: Meta<typeof ButtonsButtonClose> = {
  title: "Components/ButtonsButtonClose",
  component: ButtonsButtonClose,
tags: ['autodocs'],
  argTypes: {
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonsButtonClose>;

const sizes = ["sm", "md", "lg"] as const;
const states = ["default", "focused", "hover"] as const;

const baseProps = {
  darkBackground: true,
  className: {},
};

export const Default: Story = {
 args: {
    ...baseProps,
    size: "md",
    stateProp: "focused",
  },
};
