import React from 'react';
import { configure, addDecorator} from '@storybook/react';

// Provider library
import { ThemeProvider } from 'styled-components';

// Provider
import theme from 'styles/theme'

// CSS
import 'public/css/react-grid-layout.css';
import 'public/css/react-resizable.css';
import 'semantic-ui-css/semantic.min.css';

const req = require.context('../src/components', true, /\.stories\.js$/)

addDecorator(story => (
      <ThemeProvider theme={theme}>
        {story()}
      </ThemeProvider>
));


function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
