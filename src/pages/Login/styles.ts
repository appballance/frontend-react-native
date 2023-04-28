import styled from 'styled-components/native';
import Button from '../../components/elements/Button';
import { theme } from '../../commons/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerForms = styled.View`
  justify-content: center;
  margin: 20px;
  flex: 1;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  height: 50%;

  justify-content: center;
  align-items: center;
`;

export const ContainerResetPassoword = styled.View`
  flex-direction: row;

  height: 50px;
  align-items: center;
`;

export const ButtonResetPassword = styled(Button).attrs({
  variant: 'text',
  color: theme.palette.colors.primary.main,
})`
  width: 70px;
`;

export const ButtonRegister = styled(Button).attrs({
  variant: 'text',
  color: theme.palette.colors.primary.main,
})`
  width: 90px;
`;

export const ContainerRegiter = styled.View`
  flex-direction: row;
  flex: 1;
  height: 50px;
  align-items: center;
  background-color: aqua;
`;
