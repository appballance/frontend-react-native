import styled from 'styled-components/native';
import Button from '../../components/elements/Button';
import { theme } from '../../commons/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: #ffff;
  width: 100%;
  justify-content: center;
`;

export const StScrollView = styled.ScrollView`
  height: 500px;
  background-color: #ffff;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 50px;
  flex: 1;
  justify-content: flex-end;
  /* background-color: aqua; */
  align-items: center;
`;

export const ContainerForms = styled.View`
  margin: 0px 25px;
  height: 400px;
  justify-content: center;
  /* margin-bottom: 5%; */
  /* background-color: red; */
`;

export const ContainerButton = styled.View`
  width: 100%;
  height: 100px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledButtonLoading = styled(Button).attrs({
  color: theme.palette.colors.white.main,
})`
  width: 200px;
  height: 40px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.regular};
`;
