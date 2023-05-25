import React from 'react';

import * as S from './styles';

import { InputProps } from './@types';
import { Text, View } from 'react-native';

import Button from '../elements/Button';

const Input = ({
  value,
  height,
  placeholder,
  onChangeText,
  marginBottom,
  labelColor,
  IconRight,
  ...props
}: InputProps) => {
  return (
    <S.InputContainer marginBottom={marginBottom} height={height}>
      <View style={{ flexDirection: 'column', width: '90%' }}>
        {!!value?.length && (
          <S.Label labelColor={labelColor}>{placeholder}</S.Label>
        )}
        <S.Input
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          {...props}
        />
      </View>
      {IconRight && (
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Button height="20px" width="20px" variant="text">
            <Text>O</Text>
          </Button>
        </View>
      )}
    </S.InputContainer>
  );
};

export default Input;
