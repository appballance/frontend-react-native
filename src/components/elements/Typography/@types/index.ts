import { PropsWithChildren } from 'react';

export interface ITypography extends PropsWithChildren {
  margin: string;
  fsize: 'small' | 'medium' | 'large' | string;
  color?: string;
}
