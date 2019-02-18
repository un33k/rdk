import React from 'react';
import { storiesOf } from '@storybook/react';
import * as css from './ClickOutsideListener.story.module.scss';

storiesOf('Click Outside Listener', module)
  .add('Simple', () => <div className={css.test}>test</div>);