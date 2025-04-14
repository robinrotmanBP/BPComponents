import type { Meta, StoryObj } from '@storybook/react';
import { ButtonsButton } from './ButtonsButton';
import React from 'react';
import './storybook.css';

const meta: Meta<typeof ButtonsButton> = {
  title: 'Components/ButtonsButton',
  component: ButtonsButton,
  tags: ['autodocs'],
argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'link-color', 'link-gray'],
    },
    stateProp: {
      control: { type: 'select' },
      options: ['default', 'focused', 'hover', 'loading', 'disabled'],
    },
    iconOnly: { control: 'boolean' },
    iconLeading: { control: 'boolean' },
    iconTrailing: { control: 'boolean' },
    loadingText: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonsButton>;

export const Playground: Story = {
  args: {
    size: 'md',
    hierarchy: 'primary',
    stateProp: 'default',
    iconOnly: false,
    iconLeading: true,
    iconTrailing: true,
    loadingText: true,
    className: '',
  },
};

const sizes = ['sm', 'md', 'lg', 'xl'] as const;
const hierarchies = ['primary', 'secondary', 'tertiary', 'link-color', 'link-gray'] as const;
const states = ['default', 'focused', 'hover', 'loading', 'disabled'] as const;

const baseProps = {
  iconLeading: true,
  iconTrailing: true,
  loadingText: true,
  className: '',
};

export const AllVariants = () => (
  <div style={{ display: 'grid', gap: '32px' }}>
    {hierarchies.map(hierarchy => (
      <div key={hierarchy}>
        <h3 style={{ textTransform: 'capitalize' }}>{hierarchy}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {sizes.map(size =>
            states.map(state => (
              <div key={`${hierarchy}-${size}-${state}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ButtonsButton
                  {...baseProps}
                  size={size}
                  hierarchy={hierarchy}
                  stateProp={state}
                  iconOnly={false}
                />
                <span style={{ fontSize: '12px', marginTop: '4px' }}>{`${size} / ${state}`}</span>
              </div>
            ))
          )}
        </div>
      </div>
    ))}
  </div>
);

