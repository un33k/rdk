import React from 'react';
import { Portal } from '../Portal';

interface OverlayPortalProps {
  children?: any;
  render?: (props: {
    zIndex: number;
    portalIndex: number;
    backdropIndex: number;
  }) => void;
  onOverlayClick: () => void;
  onMount: () => void;
  onUnmount: () => void;
}

const portals: OverlayPortal[] = [];
const START_INDEX = 990;

export class OverlayPortal extends React.Component<OverlayPortalProps> {
  static defaultProps: OverlayPortalProps = {
    onMount: () => undefined,
    onUnmount: () => undefined,
    onOverlayClick: () => undefined
  };

  componentWillMount() {
    portals.push(this);
  }

  componentWillUnmount() {
    portals.splice(portals.indexOf(this), 1);
  }

  getIndexes() {
    const portalIndex = portals.indexOf(this);
    const overlayIndex = START_INDEX + portalIndex * 2 + 1;
    const backdropIndex = START_INDEX + portals.length * 2 - 1;

    return {
      portalIndex,
      overlayIndex,
      backdropIndex
    };
  }

  render() {
    const { onMount, onUnmount } = this.props;
    const render = this.props.children || this.props.render;
    const { portalIndex, backdropIndex, overlayIndex } = this.getIndexes();

    return (
      <Portal onMount={onMount} onUnmount={onUnmount}>
        {render({ overlayIndex, portalIndex, backdropIndex })}
      </Portal>
    );
  }
}
