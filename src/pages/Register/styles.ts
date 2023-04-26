import styled from 'styled-components/native';
import Button from '../../components/elements/Button';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  padding-top: 10%;

  background-color: ${({ theme }) => theme.palette.colors.white.main};
`;

export const ContainerHeader = styled.View`
  width: 100%;

  align-items: center;
`;

export const ContainerForms = styled.View`
  margin: 0px 50px;

  height: 55%;
  justify-content: center;
  margin-bottom: 5%;
`;

export const ContainerButton = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
`;

export const StyledButtonLoading = styled(Button)`
  width: 200px;
  height: 40px;

  color: ${({ theme }) => theme.palette.colors.white.main};
  font-size: 18px;
`;
