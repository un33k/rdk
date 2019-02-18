# Overlay

There are five overlay classes.

- `ConnectedOverlay`
- `GlobalOverlay`
- `OverlayContext`
- `OverlayPortal`
- `OverlayTrigger`

## ConnectedOverlay

Provides a connected overlay wrapper component.

### Usage

```javascript
import { ConnectedOverlay } from "/Overlay";

class MyClass extends React.Component {
  inputRef: any;

  onDropdownDeactivate() {
    // ...
  }

  renderDropdown(animationState: string) {
    // ...
  }

  render() {
    return (
      <ConnectedOverlay
        className="my-class"
        visible={true}
        closeOnBodyClick={true}
        onDeactivate={this.onDropdownDeactivate}
        placement="top"
        modifiers={{
          preventOverflow: {
            enabled: true
          },
          hide: {
            enabled: false
          }
        }}
        appendToBody={true}
        reference={this.inputRef ? this.inputRef.ref : undefined}
        content={animationState => this.renderDropdown(animationState)}
      >
        <input
          ref={ref => (this.inputRef = ref)}
          // ...
        />
      </ConnectedOverlay>
    );
  }
}
```

### Props

- `appendToBody`: Optional boolean that is `true` if the overlay children should be rendered in a `Portal`, `false` otherwise. Default value is `true`
- `className`: Optional styles applied to the overlay
- `closeOnBodyClick`: Optional boolean to close the overlay on body click
- `closeOnEscape`: Optional boolean to close the overlay on `esc`.
- `content`: Function that accepts an `animationState` string to render the content
- `followCursor`: Optional boolean to have the overlay follow the cursor using `Position`
- `modifiers`: Optional modifiers of type `PopperJS.Modifiers` used for positioning
- `onActivate`: Optional function called when the overlay is activated. It accepts one parameter, `event`, of type `OverlayEvent`
- `onDeactivate`?: Optional function called when the overlay is deactivated. It accepts one parameter, `event`, of type `OverlayEvent`
- `placement`: Optional string of type `PopperJS.Placement` representing the position of the overlay
- `reference`: Reference of the overlay of type `ReferenceObject` or `HTMLElement`
- `trigger`: A single trigger or an array of triggers, each of type `TriggerTypes`
- `visible`: A boolean that is `true` if the overlay is visible and `false` otherwise

### Dependencies

- [Popper.js](https://www.npmjs.com/package/popper.js/v/1.14.3)
- [Transition](https://www.npmjs.com/package/react-transition-group)

## GlobalOverlay

Overlay component that provides a global overlay with a close callback and can be called by pressing `esc` or clicking the backdrop.

### Dependencies

- [react-scrolllock](https://www.npmjs.com/package/react-scrolllock)

### Example

```javascript
import { GlobalOverlay } from '/Overlay';

function onClose() {
  // ...
}

<GlobalOverlay
  closeOnBackdropClick={true}
  closeOnEscape={true}
  hasBackdrop={true}
  onClose={onClose}
  open={true}
>
  {({ animation, overlayIndex }) => (
    // ...
  )}
</GlobalOverlay>
```

### Props

- `open`: boolean that is `true` if the overlay is visible and `false` otherwise
- `children`: Optional children of the component
- `render`: The render function accepts two parameters:
  - `overlayIndex`: number representing the overlay index
  - `animation`: string representing the animation name
- `closeOnEscape`: Optional boolean that is `true` if the overlay should close when `esc` is pressed
- `closeOnBackdropClick`: Optional boolean that is `true` if the overlay should close whe the backdrop is clicked
- `onClose`: Optional function called when the overlay is closed. There are no parameters.
- `hasBackdrop`: Optional boolean that is `true` if the overlay has a backdrop and `false` otherwise.

## OverlayContext

`OverlayContext` is a context provider used by `GlobalOverlay` that accepts a `close` function that closes current overlay. There are no dependencies.

## OverlayPortal

The `OverlayPortal` is used by GlobalOverlay and provides mount, unmount, and overlay click handlers.

### Props

- `children`: Optional children of the component
- `onMount`: Handler called when the overlay is mounted. There are no parameters.
- `onOverlayClick`: Handler called when the overlay is clicked. There are no parameters.
- `onUnmount`: Handler called when the overlay is unmounted. There are no parameters.
- `render`: Optional function that accepts the following parameters:
  - `backdropIndex`: Number representing the index of the backdrop
  - `portalIndex`: Number representing the portal index
  - `zIndex`: Number representing the z-index of the overlay

## OverlayTrigger

The `OverlayTrigger` is used by `ConnectedOverlay` to handle triggers, activation handlers, and deactivation handlers.

### TriggerTypes

The following types are supported by `TriggerTypes`:

- `click`
- `focus`
- `hover`
- `key`

### Props

- `children`: Children of the component;
- `className`: Style applied to the overlay trigger
- `onActivate`: Function that accepts one parameter, `event`, which is an object containing two properties:
  - `type`: Trigger type of type `TriggerTypes`
  - `nativeEvent`: Native event object triggered upon activation
- `onDeactivate`: Function called when the overlay trigger is deactivated. It accepts one parameter, `event`, which is an object containing two properties:
  - `type`: Trigger type of type `TriggerTypes`
  - `nativeEvent`: Native event object triggered upon activation
- `trigger`: A single trigger or an array of triggers, each of type `TriggerTypes`

### Dependencies

- [memoize-bind](https://www.npmjs.com/package/memoize-bind)
