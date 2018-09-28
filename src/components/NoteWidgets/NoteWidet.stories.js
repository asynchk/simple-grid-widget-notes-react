import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NoteWidget from './NoteWidget';

storiesOf('GWN: Indicator Widget', module)
  .addDecorator((story, context) => withInfo({ inline: true })(story)(context))
  .add('Default', () => (
    <NoteWidget />
  ))
  .add('Default with Content', () => (
    <NoteWidget
      title="Indicator Title"
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat dui, luctus nec arcu non, tristique porta massa. Nullam commodo finibus est, consectetur sodales massa bibendum et."
    />
  ))
  .add('Default with Content fixed width', () => (
    <div
      style={{
        height: 600,
        width: 600,
      }}
    >
      <NoteWidget
        title="Indicator Title"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat dui, luctus nec arcu non, tristique porta massa. Nullam commodo finibus est, consectetur sodales massa bibendum et."
      />
    </div>
  ));
