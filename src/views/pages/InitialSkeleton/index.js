import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Typography } from 'views/Components/Typography';
import * as S from './style';

function InitialSkeleton() {
  const navigation = useNavigation();

  return (
    <S.ContainerView>
      <S.ContainerNameLogo>
        <Typography color="dark" variant="h1">
          Balance
        </Typography>
      </S.ContainerNameLogo>
      <S.ContainerLogo>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/images/Personagem-Balance.png')}
        />
      </S.ContainerLogo>
      <S.ContainerDescription>
        <S.TextDescription>Bem vindo ao aplicativo Balance!</S.TextDescription>

        <S.TextSubDescription>
          Aqui você poderá visualizar os seus saldos em cada conta bancária
        </S.TextSubDescription>
      </S.ContainerDescription>
      <S.ContainerButton>
        <Button
          style={{ height: 60, width: 300, justifyContent: 'center' }}
          mode="contained">
          <S.TextButtonRegistration>Acessar</S.TextButtonRegistration>
        </Button>
      </S.ContainerButton>
      <S.ContainerRegistration>
        <S.TextRegistrations>Não tem uma conta ainda?</S.TextRegistrations>
        <S.ButtonRegistrations onPress={() => navigation.navigate('Register')}>
          Cadastrar
        </S.ButtonRegistrations>
      </S.ContainerRegistration>
    </S.ContainerView>
  );
}

export { InitialSkeleton };
