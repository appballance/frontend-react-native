import { Typographies } from './styles';

const Typography = ({ children, color, variant, ...rest }) => {
  const Element = Typographies[variant];

  return (
    <Element {...rest} color={color}>
      {children}
    </Element>
  );
};

export { Typography };
