import styled from 'styled-components/native';

export const StyledTypgraphy = styled.Text<{
  $margin?: string;
  $fsize?: string;
  $fFamily?: string;
  $color?: string;
}>`
  font-size: ${({ $fsize }) => ($fsize ? $fsize : '16px')};

  font-family: ${({ $fFamily }) => ($fFamily ? $fFamily : 'Jost-Regular')};

  color: ${({ $color, theme }) =>
    $color ? $color : theme.palette.colors.black.main};
`;
