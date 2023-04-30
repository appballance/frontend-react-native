import React from 'react';

import { ICard } from './@types';

import * as S from './styles';

export const Card = ({
  width,
  height,
  fontColor,
  children,
  background,
  ...restProps
}: ICard) => (
  <S.Card
    width={width}
    height={height}
    fontColor={fontColor}
    background={background}
    {...restProps}>
    {children}
  </S.Card>
);
