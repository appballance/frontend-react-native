import styled from 'styled-components/native';

export const InputContainer = styled.View<{ marginBottom?: string }>`
  display: flex;
  flex-direction: column;
  border-bottom-width: 1px;
  border-bottom-color: #141b41;

  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
`;

export const Label = styled.Text<{ labelColor?: string }>`
  color: ${({ labelColor }) => (labelColor ? labelColor : 'white')};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  color: black;
`;
