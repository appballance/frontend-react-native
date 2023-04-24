import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ $size: string }>`
  /* flex: 1; */

  justify-content: center;
  align-items: center;

  border-radius: 12px;
  width: 80%;
  height: 20%;

  ${({ $size }) =>
    $size === 'small' &&
    css`
      width: 50%;
      height: 20%;
    `}

  ${({ $size }) =>
    $size === 'medium' &&
    css`
      width: 70%;
      height: 20%;
    `}

    
  ${({ $size }) =>
    $size === 'large' &&
    css`
      width: 90%;
      height: 20%;
    `}

  background-color: ${props => props.theme.palette.colors.primary.main};
`;
