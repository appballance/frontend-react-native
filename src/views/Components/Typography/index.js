import { Typographies } from './styles';

const Typography = ({ children, variant }) => {
  const Element = Typographies[variant];

  return <Element>{children}</Element>;
};

export { Typography };
