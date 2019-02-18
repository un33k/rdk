import { createContext } from 'react';

interface OverlayContextValue {
  /**
   * Closes current overlay.
   */
  close(): void;
}

export const OverlayContext = createContext<OverlayContextValue>({
  close: () => undefined
});
