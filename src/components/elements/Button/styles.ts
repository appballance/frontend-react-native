import { css } from 'styled-components/native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{
  width: string;
  height: string;
  variant: string;
  $disabled?: boolean;
}>`
  /* flex: 1; */

  box-sizing: border-box;

  justify-content: center;
  align-items: center;

  border-radius: 16px;
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};

  ${({ variant }) =>
    variant === 'contained' &&
    css`
      background-color: ${props => props.theme.palette.colors.primary.main};
    `}

  ${({ theme, variant, $disabled }) =>
    variant === 'text' &&
    css`
      background-color: ${$disabled
        ? theme.palette.colors.gray.main
        : 'transparent'};
      border: none;
    `}


    ${({ variant, theme }) =>
    variant === 'outlined' &&
    css`
      background-color: transparent;
      border: 2px solid ${theme.palette.colors.primary.main};
      overflow: hidden;
    `}
`;
