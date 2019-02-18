import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ClickOutsideListener } from './ClickOutsideListener';
import * as css from './ClickOutsideListener.story.module.scss';

function ClickOutsideListenerDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      Outside
      <div className={css.outside}>
        <ClickOutsideListener
          onClickOutside={() => setVisible(false)}
          onEscape={() => setVisible(false)}
        >
          <div className={css.inside}>
            <div>Inside</div>
            <button onClick={() => setVisible(true)}>Click me</button>
            {visible && <div className={css.clickedMsg}>Clicked</div>}
          </div>
        </ClickOutsideListener>
      </div>
    </Fragment>
  );
}

storiesOf('Click Outside Listener', module)
  .add('Simple', () => <ClickOutsideListenerDemo /> );