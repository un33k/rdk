import React, { Fragment } from 'react';
import { Transition } from 'react-transition-group';
import { Portal } from '../Portal';
import { OverlayTrigger, TriggerTypes } from './OverlayTrigger';
import { ClickOutsideListener } from '../ClickOutsideListener';
import {
  Position,
  ReferenceObject,
  Placement
} from '../Position';
import * as bind from 'memoize-bind';

export interface OverlayEvent {
  type: TriggerTypes;
  nativeEvent: any;
}

export interface ConnectedOverlayProps {
  content: any;
  reference?: ReferenceObject | HTMLElement | any;
  placement: Placement;
  modifiers?: any;
  visible: boolean;
  className?: any;
  trigger?: TriggerTypes[] | TriggerTypes;
  closeOnBodyClick: boolean;
  closeOnEscape: boolean;
  appendToBody?: boolean;
  followCursor?: boolean;
  onActivate?: (event: OverlayEvent) => void;
  onDeactivate?: (event: OverlayEvent) => void;
}

export class ConnectedOverlay extends React.Component<ConnectedOverlayProps> {
  static defaultProps: Partial<ConnectedOverlayProps> = {
    closeOnBodyClick: true,
    closeOnEscape: true,
    appendToBody: true
  };

  triggerRef: OverlayTrigger | null = null;
  positionRef: Position | null = null;

  getReference() {
    const { reference } = this.props;

    if (reference) {
      if (reference.current) {
        return reference.current;
      }

      return reference;
    } else if (this.triggerRef) {
      return this.triggerRef.element;
    }
  }

  onClickOutside(event: MouseEvent) {
    const { onDeactivate, closeOnBodyClick } = this.props;

    if (closeOnBodyClick && onDeactivate) {
      onDeactivate({
        type: 'click',
        nativeEvent: event
      });
    }
  }

  onEscape(event: KeyboardEvent) {
    const { onDeactivate, closeOnEscape } = this.props;

    if (closeOnEscape && onDeactivate) {
      onDeactivate({
        type: 'key',
        nativeEvent: event
      });
    }
  }

  renderContent(animationState: string) {
    const { placement, modifiers, content, followCursor } = this.props;
    const reference = this.getReference();

    return (
      <Position
        style={{ zIndex: 9999 }}
        reference={reference}
        placement={placement}
        modifiers={modifiers}
        followCursor={followCursor}
        ref={ref => (this.positionRef = ref)}
      >
        <ClickOutsideListener
          onClickOutside={bind(this.onClickOutside, this)}
          onEscape={bind(this.onEscape, this)}
        >
          {content(animationState)}
        </ClickOutsideListener>
      </Position>
    );
  }

  render() {
    const {
      children,
      trigger,
      visible,
      onActivate,
      onDeactivate,
      appendToBody
    } = this.props;

    return (
      <Fragment>
        {children && trigger && onActivate && onDeactivate && (
          <OverlayTrigger
            trigger={trigger}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
            ref={ref => (this.triggerRef = ref)}
          >
            {children}
          </OverlayTrigger>
        )}
        {children && !trigger && children}
        <Transition
          in={visible}
          timeout={100}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {animationState => (
            <Fragment>
              {appendToBody && (
                <Portal>{this.renderContent(animationState)}</Portal>
              )}
              {!appendToBody && this.renderContent(animationState)}
            </Fragment>
          )}
        </Transition>
      </Fragment>
    );
  }
}
