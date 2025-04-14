import type { Preview } from "@storybook/react";
// import '../tailwind.css';
import '@fontsource/syne/400.css'; 
import '@fontsource/syne/500.css'; 
import '@fontsource/syne/600.css';
import '@fontsource/syne/700.css'; 
import '@fontsource/syne/800.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
