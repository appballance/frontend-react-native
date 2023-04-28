import 'styled-components';

import Theme from './theme';

import { ITheme } from './@types';

export type ITheme = typeof Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
