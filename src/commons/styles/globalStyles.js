import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html, body, #root, button, input, select, textarea, p {
    
    color: ${({ theme: { colors } }) => colors.blue_1};
  }
`;
