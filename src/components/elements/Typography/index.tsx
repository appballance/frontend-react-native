import React from 'react';
import { ITypography } from './@types';

import * as S from './styles';

const Typography = ({ margin, color, fontSize, children }: ITypography) => {
  return (
    <S.StyledTypgraphy $color={color} $fsize={fontSize} $margin={margin}>
      {children}
    </S.StyledTypgraphy>
  );
};

export default Typography;
