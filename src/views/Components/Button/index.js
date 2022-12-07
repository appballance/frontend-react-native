import React from 'react';
import { Text } from 'react-native';
import { Typography } from '../Typography';

import * as S from './styles';

function Button({ children, height, width, ...rest }) {
  return (
    <S.Button height={height} width={width} {...rest}>
      <Typography variant="h2">{children}</Typography>
    </S.Button>
  );
}

export default Button;
