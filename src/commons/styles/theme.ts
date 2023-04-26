import { ITheme } from './@types';

const theme: ITheme = {
  palette: {
    colors: {
      primary: { main: '#9448BC' },
      secondary: { main: '#6D2494' },
      success: { main: '#417505' },
      error: { main: '#bc1610' },
      text: { main: '#0C011B' },

      black: { main: '#000000' },
      white: { main: '#fff' },
      gray: { main: '#47454F', light: '#F9F7FB', dark: '#2C2834' },
    },
  },

  typography: {
    regular: 'Jost-Regular',
    bold: 'Jost-Regular',
    thin: 'Jost-Thin',
  },
};
export { theme };
