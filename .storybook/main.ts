import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
  '../src/components/**/*.stories.@(js|jsx|ts|tsx)', // your ButtonsButton story is here
  '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',    // fallback if others are used
],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
typescript: {
  check: false,
  reactDocgen: 'react-docgen',
}
};

export default config;


