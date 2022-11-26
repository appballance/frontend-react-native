import { Typographies } from './TypographyStyled';

const Typography = ({ children, variant }) => {
  const Element = Typographies[variant];

  return <Element>{children}</Element>;
};

Typography.defaultProps = TypographyDefaultProps;

export { Typography };
