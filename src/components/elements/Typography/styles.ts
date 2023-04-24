import { css } from 'styled-components';
import styled from 'styled-components/native';

export const StyledTypgraphy = styled.Text<{
  $margin: string;
  $fsize: string;
  $color?: string;
}>`
  font-family: 'Jost Bold';

  color: ${({ $color, theme }) =>
    $color ? $color : theme.palette.colors.black.main};

  ${({ $fsize }) =>
    $fsize &&
    css`
      width: 150px;
      height: 20%;
    `}
`;
