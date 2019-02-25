import React, { Fragment, Component } from 'react';
import Transition from 'react-transition-group/Transition';
import { OverlayPortal } from './OverlayPortal';
import { Backdrop } from './Backdrop';
import ScrollLock from 'react-scrolllock';
import bind from 'memoize-bind';
import { OverlayContext } from './OverlayContext';

export interface GlobalOverlayProps {
  open: boolean;
  children?: any;
  render?: (props: { overlayIndex: number; animation: string }) => void;
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
  onClose?: () => void;
  hasBackdrop?: boolean;
}

interface GlobalOverlayState {
  open: boolean;
}

export class GlobalOverlay extends Component<
  GlobalOverlayProps,
  GlobalOverlayState
> {
  static defaultProps: Partial<GlobalOverlayProps> = {
    hasBackdrop: true,
    closeOnEscape: true,
    closeOnBackdropClick: true,
    onClose: () => undefined
  };

  constructor(props: GlobalOverlayProps) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  componentDidUpdate(prevProps: GlobalOverlayProps) {
    const { open, onClose } = this.props;
    if (open !== prevProps.open && this.state.open !== open) {
      this.setState({ open });

      if (!open && onClose) {
        onClose();
      }
    }
  }

  onBackdropClick() {
    if (this.props.closeOnBackdropClick) {
      this.close();
    }
  }

  onPortalMount() {
    if (this.props.closeOnEscape) {
      document.addEventListener('keydown', this.onDocumentKeydown);
    }
  }

  onPortalUnmount() {
    if (this.props.closeOnEscape) {
      document.removeEventListener('keydown', this.onDocumentKeydown);
    }
  }

  close() {
    this.setState({ open: false });
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  onDocumentKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      this.close();
    }
  };

  render() {
    const { open } = this.state;
    const { hasBackdrop, children, render } = this.props;
    const renderFn = children || render;

    return (
      <OverlayContext.Provider
        value={{
          close: bind(this.close, this)
        }}
      >
        <Transition
          in={open}
          timeout={100}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {animation => (
            <Fragment>
              <OverlayPortal
                onMount={bind(this.onPortalMount, this)}
                onUnmount={bind(this.onPortalUnmount, this)}
              >
                {({ overlayIndex, backdropIndex, portalIndex }) => (
                  <Fragment>
                    {hasBackdrop && (
                      <Backdrop
                        zIndex={backdropIndex}
                        visible={open}
                        onClick={bind(this.onBackdropClick, this)}
                        className={`backdrop-${portalIndex}`}
                      />
                    )}
                    {renderFn({ overlayIndex, animation })}
                  </Fragment>
                )}
              </OverlayPortal>
              <ScrollLock />
            </Fragment>
          )}
        </Transition>
      </OverlayContext.Provider>
    );
  }
}
