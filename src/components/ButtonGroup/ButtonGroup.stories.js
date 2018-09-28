import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ButtonGroup from './ButtonGroup.Component';


storiesOf('GWN: Button Group', module)
  .addDecorator((story, context) => withInfo({ inline: true })(story)(context))
  .add('Default', () => (
    <ButtonGroup />
  ))
  .add('inputMode', () => (
    <ButtonGroup
      inputMode
    />
  ));
