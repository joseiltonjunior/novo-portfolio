import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  icon?: React.ComponentType<IconBaseProps>;
  noMargin?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container className="btn" type="button" hasChildren={!!children} {...rest}>
      {Icon && <Icon fontSize="1rem" />} {children}
    </Container>
  );
};
