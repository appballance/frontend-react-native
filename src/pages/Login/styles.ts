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
  height: 200px;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;

  margin-top: 10%;
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
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ContainerRegister = styled.View`
  flex-direction: row;
  justify-content: center;
  flex: 1;
  height: 200px;
  align-items: flex-end;
`;
