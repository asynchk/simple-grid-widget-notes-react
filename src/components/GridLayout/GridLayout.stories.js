import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Grid from './index';

storiesOf('GWN: Grid Layout', module)
  .addDecorator((story, context) => withInfo({ inline: true })(story)(context))
  .add('Default', () => (<Grid />));
