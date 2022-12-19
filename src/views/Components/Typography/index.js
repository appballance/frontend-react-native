import { Typographies } from './styles';

const Typography = ({ children, color, variant }) => {
  const Element = Typographies[variant];

  return <Element color={color}>{children}</Element>;
};

export { Typography };
