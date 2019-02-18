import React from 'react';
import ReactDOM from 'react-dom';

interface ClickOutsideListenerProps {
  children: React.ReactNode;
  onClickOutside?: (event: MouseEvent) => void;
  onEscape?: (event: KeyboardEvent) => void;
}

export class ClickOutsideListener extends React.Component<
  ClickOutsideListenerProps
> {
  node: Element | null = null;

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this) as Element;

    if (this.props.onClickOutside) {
      document.addEventListener('mousedown', this.onDocumentClick);
    }

    if (this.props.onEscape) {
      document.addEventListener('keydown', this.onDocumentKeydown);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onDocumentClick);
    document.removeEventListener('keydown', this.onDocumentKeydown);
  }

  onDocumentClick = (event: MouseEvent) => {
    if (event.which !== 3) {
      const contentContains =
        this.node && this.node.contains(event.target as HTMLElement);

      if (!contentContains && this.props.onClickOutside) {
        this.props.onClickOutside(event);
      }
    }
  };

  onDocumentKeydown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && this.props.onEscape) {
      this.props.onEscape(event);
    }
  };

  render() {
    return this.props.children;
  }
}
