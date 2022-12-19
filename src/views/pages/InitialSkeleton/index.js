import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from 'views/Components/Typography';
import * as S from './style';

function InitialSkeleton() {
  return (
    <S.ContainerView>
      <Typography color="dark" variant="h2">
        Initial Skeleton
      </Typography>
      <Image
        resizeMode="contain"
        source={require('../../../../assets/images/Personagem-Balance.png')}
      />
    </S.ContainerView>
  );
}

export { InitialSkeleton };
