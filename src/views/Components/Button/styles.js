import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

console.log('theme::', theme);

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border: none;
  margin: 10px;
  width: ${({ width }) => (width ? width : '70%')};
  height: 48px;
  background-color: ${theme.palette.colors?.primary};
  text-transform: uppercase;
  font-family: ${theme.typography.body1.fontFamily};
  border-radius: 5px;
  font-weight: 500;
  font-size: ${theme.typography.body1.fontSizeSubtitles};
`;
