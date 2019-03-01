import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ExitListener } from './ExitListener';

function ExitListenerDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      Outside
      <div style={{ padding: '50px 25%' }}>
        <ExitListener
          onClickOutside={() => setVisible(false)}
          onEscape={() => setVisible(false)}
        >
          <div style={{ padding: '25px', border: '1px solid #000'  }}>
            <div>Inside</div>
            <button onClick={() => setVisible(true)}>Click me</button>
            {visible && <div style={{ padding: '10px 0' }}>Clicked</div>}
          </div>
        </ExitListener>
      </div>
    </Fragment>
  );
}

storiesOf('ExitListener', module)
  .add('Simple', () => <ExitListenerDemo /> );