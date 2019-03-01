import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

interface ExitListenerProps {
  children: React.ReactNode;
  onClickOutside?: (event: MouseEvent) => void;
  onEscape?: (event: KeyboardEvent) => void;
}

export class ExitListener extends Component<
  ExitListenerProps
> {
  node: Element | null = null;

  componentDidMount() {
    this.node = findDOMNode(this) as Element;

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
