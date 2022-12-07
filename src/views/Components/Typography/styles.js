import styled from 'styled-components';

const h1 = styled.Text`
  color: ${({ theme, color }) =>
    color === 'white'
      ? theme.palette.colors.white
      : theme.palette.colors.dark.gray};
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
`;

const h2 = styled.Text`
  font-size: 20px;
  color: ${({ theme, color }) =>
    color === 'white'
      ? theme.palette.colors.white
      : theme.palette.colors.dark.gray};
  font-family: 'Inter-Bold';
  font-weight: ${({ theme }) => theme.typography.h2?.fontWeight};
`;

const body1 = styled.Text`
  font-size: ${({ theme }) => theme.typography.body1?.fontSizeText};
  color: ${({ theme, color }) =>
    color === 'white'
      ? theme.palette.colors.white
      : theme.palette.colors.dark.gray};
  font-family: ${({ theme }) => theme.typography.body1?.fontFamily};
`;

const Typographies = {
  h1,
  h2,
  body1,
};

export { Typographies };
