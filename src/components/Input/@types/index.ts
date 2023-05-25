import React from 'react';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  placeholder: string | undefined;
  onChangeText: (text: string) => void;
  value: string | undefined;
  height?: string;
  marginBottom?: string;
  labelColor?: string;
  IconRight?: any;
}
