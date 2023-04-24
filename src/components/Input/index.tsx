import React from 'react';

import * as S from './styles';

import { InputProps } from './@types';

const Input = ({ value, placeholder, onChangeText }: InputProps) => {
  return (
    <S.InputContainer>
      {!!value?.length && <S.Label>{placeholder}</S.Label>}
      <S.Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </S.InputContainer>
  );
};

export default Input;
