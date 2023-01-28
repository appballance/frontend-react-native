import { Button } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import styled from 'styled-components/native';
import { Typography } from 'views/Components/Typography';

export const ContainerView = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const ContainerNameLogo = styled.View`
  align-items: center;
  justify-content: center;
  height: 150px;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  align-items: center;
`;

export const TextDescription = styled(Typography).attrs({
  variant: 'h2',
})`
  font-weight: 600;
`;

export const TextSubDescription = styled(Typography).attrs({
  variant: 'h2',
})`
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
`;

export const ContainerDescription = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20%;
  margin-bottom: -5%;
`;

export const ContainerButton = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: -10%;
`;

export const TextButtonRegistration = styled(Typography).attrs({
  variant: 'h2',
})`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.colors?.white};
`;

export const ContainerRegistration = styled.View`
  flex: 1;
  align-items: center;
`;

export const TextRegistrations = styled(Typography).attrs({
  variant: 'h2',
})``;

export const ButtonRegistrations = styled(Button).attrs({
  mode: 'text',
})`
  font-size: 16px;
  margin-top: 20%;
`;
