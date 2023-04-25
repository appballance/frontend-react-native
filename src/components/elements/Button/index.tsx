import React from 'react';

import * as S from './styles';
import { IButton } from './@types';
import { Text } from 'react-native';

function Button({
  children,
  variant = 'contained',
  width = '150px',
  height = '100px',
  disabled,
  ...props
}: IButton) {
  return (
    <S.Button
      variant={variant}
      accessibilityRole={'button' as 'button'}
      activeOpacity={0.33}
      width={width}
      height={height}
      disabled={disabled}
      $disabled={disabled}
      {...props}>
      <Text>{children}</Text>
    </S.Button>
  );
}

export default Button;
