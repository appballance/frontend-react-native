import type { PropsWithChildren } from 'react';

export interface IButton extends PropsWithChildren {
  size: 'small' | 'medium' | 'large';
}
