import styled from 'styled-components/native';

export const InputContainer = styled.View<{
  marginBottom?: string;
  height?: string;
}>`
  height: ${({ height }) => (height ? height : 'auto')};
  min-height: 50px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #141b41;

  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
`;

export const Label = styled.Text<{ labelColor?: string }>`
  color: ${({ labelColor }) => (labelColor ? labelColor : 'white')};
`;

export const Input = styled.TextInput`
  width: 80%;
  padding-left: 10px;
  color: black;
`;
