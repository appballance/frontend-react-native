import React from 'react';
import { ITypography } from './@types';

import * as S from './styles';

const Typography = ({
  margin,
  color,
  fontSize,
  fontFamily,
  children,
}: ITypography) => {
  return (
    <S.StyledTypgraphy
      $color={color}
      $fsize={fontSize}
      $fFamily={fontFamily}
      $margin={margin}>
      {children}
    </S.StyledTypgraphy>
  );
};

export default Typography;
