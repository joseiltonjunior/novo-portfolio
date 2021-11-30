import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface skillParam {
  url: string;
  icon: React.ComponentType<IconBaseProps>;
}

export const Skill: React.FC<skillParam> = ({ icon: Icon, url }) => {
  return (
    <Container>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>
    </Container>
  );
};
