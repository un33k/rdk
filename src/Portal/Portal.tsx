import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  onMount: () => void;
  onUnmount: () => void;
}

export class Portal extends React.Component<PortalProps, {}> {
  static defaultProps = {
    onMount: () => undefined,
    onUnmount: () => undefined
  };

  defaultNode: HTMLElement | null = null;

  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
      this.props.onUnmount();
    }

    this.defaultNode = null;
  }

  render() {
    if (!this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
      this.props.onMount();
    }

    return ReactDOM.createPortal(this.props.children, this.defaultNode);
  }
}
