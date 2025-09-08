import type { Preview } from '@storybook/nextjs';
import '../src/app/globals.css';
import '../src/app/page.module.css';
import './preview.stories.css';

const preview: Preview = {
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;