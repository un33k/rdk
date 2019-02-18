import React, { Fragment, Component } from 'react';
import PopperJS from 'popper.js';
import classNames from 'classnames';
import sizeMe from 'react-sizeme';
import * as bind from 'memoize-bind';
import * as css from './Position.module.scss';

export type Placement = PopperJS.Placement;

export interface ReferenceObject {
  top: number;
  left: number;
  height: number;
  width: number;
}

interface PositionProps {
  reference: ReferenceObject | HTMLElement;
  placement?: Placement;
  modifiers?: PopperJS.Modifiers;
  className?: any;
  style?: any;
  followCursor?: boolean;
}

const SizeMe = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
  refreshMode: 'debounce'
})(({ children }) => <Fragment>{children}</Fragment>);

export class Position extends Component<PositionProps, {}> {
  static defaultProps: Partial<PositionProps> = {
    placement: 'top',
    modifiers: {}
  };

  element: any;
  popperInstance?: PopperJS;
  mouse = { pageX: 0, pageY: 0 };

  componentDidUpdate(prevProps: PositionProps) {
    if (this.props.reference !== prevProps.reference && this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = undefined;
      this.createPopper();
    }
  }

  componentWillUnmount() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }

    if (this.props.followCursor) {
      window.removeEventListener('mousemove', this.onMouseMove);
    }
  }

  getReference() {
    const { reference, followCursor } = this.props;
    const referenceElement = reference as HTMLElement;

    if (followCursor) {
      return {
        getBoundingClientRect: () => ({
          top: this.mouse.pageY,
          right: this.mouse.pageX,
          bottom: this.mouse.pageY,
          left: this.mouse.pageX,
          width: 0,
          height: 0
        }),
        clientWidth: 0,
        clientHeight: 0
      };
    } else if (referenceElement && !referenceElement.getBoundingClientRect) {
      const { top, left, width, height } = reference as ReferenceObject;

      return {
        getBoundingClientRect: () => ({
          top,
          left,
          width,
          bottom: top - height,
          right: left - width,
          height
        }),
        clientWidth: width,
        clientHeight: height
      };
    }

    return referenceElement;
  }

  onMouseMove = ({ pageX, pageY }: MouseEvent) => {
    this.mouse = { pageX, pageY };

    if (this.popperInstance) {
      this.popperInstance.scheduleUpdate();
    }
  };

  createPopper(element = this.element) {
    this.element = element;

    if (!this.popperInstance && element) {
      const { placement, modifiers, followCursor } = this.props;
      const reference = this.getReference();

      if (reference) {
        window.removeEventListener('mousemove', this.onMouseMove);

        this.popperInstance = new PopperJS(reference, this.element, {
          placement,
          modifiers,
          onCreate: () => {
            if (followCursor) {
              window.addEventListener('mousemove', this.onMouseMove);
            }
          }
        } as any);
      }
    }
  }

  onSize() {
    if (this.popperInstance) {
      this.popperInstance.scheduleUpdate();
    }
  }

  render() {
    const { className, style, children } = this.props;

    return (
      <span
        ref={elm => this.createPopper(elm)}
        className={classNames(className, css.container)}
        style={style}
      >
        <SizeMe onSize={bind(this.onSize, this)}>{children}</SizeMe>
      </span>
    );
  }
}
