export interface IPalette {
  colors: {
    primary: { main: string; dark?: string; light?: string };
    secondary: { main: string; dark?: string; light?: string };
    success: { main: string; dark?: string; light?: string };
    error: { main: string; dark?: string; light?: string };
    text: { main: string; dark?: string; light?: string };

    black: { main: string; dark?: string; light?: string };
    white: { main: string; dark?: string; light?: string };
    gray: { main: string; dark?: string; light?: string };
  };
}

export interface ITheme {
  palette: IPalette;
  typography: {
    regular: string;
    bold: string;
    thin: string;
  };
}
