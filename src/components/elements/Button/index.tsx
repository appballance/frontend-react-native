import React from 'react';

import * as S from './styles';
import { IButton } from './@types';

import Typography from '../Typography';

function Button({
  children,
  variant = 'contained',
  width = '150px',
  height = '100px',
  disabled = false,
  fontSize,
  fontFamily,
  color,
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
      <Typography color={color} fontFamily={fontFamily} fontSize={fontSize}>
        {children}
      </Typography>
    </S.Button>
  );
}

export default Button;
