import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';
import * as css from './Backdrop.module.scss';

interface BackdropProps {
  visible: boolean;
  zIndex: number;
  className?: any;
  onClick: (event: React.MouseEvent) => void;
}

export class Backdrop extends Component<BackdropProps, {}> {
  static defaultProps: BackdropProps = {
    onClick: () => undefined,
    zIndex: 998,
    visible: false,
    className: 'backdrop-0'
  };

  render() {
    const { visible, onClick, zIndex, className } = this.props;

    return (
      <Transition
        in={visible}
        timeout={100}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {animationState => (
          <div
            className={classNames(css.backdrop, animationState, className)}
            onClick={onClick}
            style={{ zIndex }}
          />
        )}
      </Transition>
    );
  }
}
