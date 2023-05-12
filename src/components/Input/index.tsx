import React from 'react';

import * as S from './styles';

import { InputProps } from './@types';

const Input = ({
  value,
  placeholder,
  onChangeText,
  marginBottom,
  labelColor,
  ...props
}: InputProps) => {
  return (
    <S.InputContainer marginBottom={marginBottom}>
      {!!value?.length && (
        <S.Label labelColor={labelColor}>{placeholder}</S.Label>
      )}
      <S.Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </S.InputContainer>
  );
};

export default Input;
