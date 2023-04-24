import React from 'react';

import * as S from './styles';
import { IButton } from './@types';
import Typography from '../Typography';

function Button({ children, size }: IButton) {
  return (
    <S.Button
      accessibilityRole={'button' as 'button'}
      activeOpacity={0.33}
      $size={size}>
      <Typography fsize={size} margin="0">
        {children}
      </Typography>
    </S.Button>
  );
}

export default Button;
