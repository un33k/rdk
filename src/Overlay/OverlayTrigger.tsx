import React, { ReactNode, Component } from 'react';
import classNames from 'classnames';
import bind from 'memoize-bind';

export type TriggerTypes = 'hover' | 'click' | 'focus' | 'key';

interface OverlayTriggerProps {
  trigger: TriggerTypes | TriggerTypes[];
  onActivate: (event: { type: TriggerTypes; nativeEvent: any }) => void;
  onDeactivate: (event: { type: TriggerTypes; nativeEvent: any }) => void;
  children: ReactNode;
  className?: any;
}

export class OverlayTrigger extends Component<OverlayTriggerProps, {}> {
  timeout: any;
  element: HTMLSpanElement | null = null;

  hasTrigger(type: TriggerTypes) {
    const triggers = this.props.trigger;

    if (Array.isArray(triggers)) {
      return triggers.includes(type);
    } else {
      return type === triggers;
    }
  }

  onFocus(event) {
    this.activate({ type: 'focus', nativeEvent: event });
  }

  onBlur(event) {
    this.deactivate({ type: 'focus', nativeEvent: event });
  }

  onMouseEnter(event: MouseEvent) {
    this.activate({ type: 'hover', nativeEvent: event });
  }

  onMouseLeave(event: MouseEvent) {
    this.deactivate({ type: 'hover', nativeEvent: event });
  }

  onClick(event: MouseEvent) {
    this.activate({ type: 'click', nativeEvent: event });

    // Kill the tooltip on click if its not a click listener
    if (!this.hasTrigger('click')) {
      this.props.onDeactivate({ type: 'hover', nativeEvent: event });
    }
  }

  activate({ type, nativeEvent }) {
    const { onActivate } = this.props;

    if (this.hasTrigger(type)) {
      onActivate({ type, nativeEvent });
    }
  }

  deactivate({ type, nativeEvent }) {
    const { onDeactivate } = this.props;

    if (this.hasTrigger(type)) {
      onDeactivate({ type, nativeEvent });
    }
  }

  render() {
    const { children, className } = this.props;
    const tabIndex = this.hasTrigger('focus') ? -1 : undefined;

    return (
      <span
        tabIndex={tabIndex}
        ref={ref => (this.element = ref)}
        onMouseEnter={bind(this.onMouseEnter, this)}
        onMouseLeave={bind(this.onMouseLeave, this)}
        onFocus={bind(this.onFocus, this)}
        onBlur={bind(this.onBlur, this)}
        onClick={bind(this.onClick, this)}
        className={classNames(className)}
      >
        {children}
      </span>
    );
  }
}
