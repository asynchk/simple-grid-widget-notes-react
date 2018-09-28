import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputField from './TextArea.Component';


storiesOf('GWN: InputField', module)
  .addDecorator((story, context) => withInfo({ inline: true })(story)(context))
  .add('Default', () => (
    <InputField />
  ));
