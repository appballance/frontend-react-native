import React from 'react';
import { ITypography } from './@types';

import * as S from './styles';

const Typography = ({ margin, color, fsize, children }: ITypography) => {
  return (
    <S.StyledTypgraphy $color={color} $fsize={fsize} $margin={margin}>
      {children}
    </S.StyledTypgraphy>
  );
};

export default Typography;
