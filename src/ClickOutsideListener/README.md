## ClickOutsideListener

The `ClickOutsideListener` adds mouse and keyboard event listeners to provide callbacks to handle events when the user clicks outside a certain element or presses the `esc` key.

## Usage

```javascript
import React, { Component, useState } from 'react';

class MyClass extends Component {
  const [ visible, setVisible ] = useState(false);

  render() {
    <div>
      <span>Outside</span>
      <ClickOutsideListener
        onClickOutside={() => setVisible(false)}
        onEscape={() => setVisible(false)}
      >
        <div>
          <span>Inside</span>
          <button onClick={() => setVisible(true)}>Toggle</button>
          {visible && <span>Clicked</span>}
        </div>
      </ClickOutsideListener>
    </div>;
  }
}
```

## Props

- `onClickOutside`: Optional callback that accepts one parameter of type `MouseEvent` and is called when the user clicks outside the children of this component.
- `onEscape`: Optional callback that accepts one parameter of type `KeyboardEvent` and is called when the user presses the `esc` key
