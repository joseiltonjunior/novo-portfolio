import React, { ReactNode } from 'react';
import { Container } from './styles';

type ButtonGroupProps = {
  margin?: boolean;
  align?: 'left' | 'right' | 'center' | 'between';
  children: ReactNode;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  margin = false,
  align = 'right',
  children,
}) => {
  return (
    <Container align={align} margin={margin}>
      {children}
    </Container>
  );
};
