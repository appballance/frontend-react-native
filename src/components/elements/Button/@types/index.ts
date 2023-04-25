import { TouchableOpacityProps } from 'react-native/types';

export interface IButton extends TouchableOpacityProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  width?: string;
  height?: string;
  disabled?: boolean;
}
