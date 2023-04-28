import styled from 'styled-components/native';
import Button from '../../components/elements/Button';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  background-color: aqua;
  align-items: center;
`;

export const ContainerForms = styled.View`
  margin: 0px 45px;
  height: 55%;
  justify-content: center;
  margin-bottom: 5%;
`;

export const ContainerButton = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: aqua;
  justify-content: center;
`;

export const StyledButtonLoading = styled(Button)`
  width: 200px;
  height: 40px;

  color: ${({ theme }) => theme.palette.colors.white.main};
  font-size: 18px;
`;
