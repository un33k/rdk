import { ComponentType } from 'react';

declare module '*.css';
declare module '*.scss';

declare module 'memoize-bind';

declare module 'react-sizeme' {
  export interface Sized {
    size: {
      width: number;
    };
  }
  export default function(): <P>(
    component: ComponentType<P & Sized>
  ) => ComponentType<P>;
  }