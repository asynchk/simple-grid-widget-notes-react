import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Home from './Home'

storiesOf('GWN: Home Page', module)
    .addDecorator((story, context) => withInfo({ inline: true })(story)(context))
    .add('Default', () => (
        <Home />
    ));