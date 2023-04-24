import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html, body, #root, button, input, select, textarea, p {
    font: 14px 'Jost Regular';
    color: ${({ theme: { colors } }) => colors.blue_1};
  }
`;
