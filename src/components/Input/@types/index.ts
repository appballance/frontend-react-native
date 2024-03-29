import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  placeholder: string | undefined;
  onChangeText: (text: string) => void;
  value: string | undefined;
  marginBottom?: string;
  labelColor?: string;
}
