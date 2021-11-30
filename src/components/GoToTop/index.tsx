import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

import { Container } from './styles';

export const GoToTop: React.FC = () => {
  return (
    <Container>
      <a href="#home">
        <button type="button">
          <FaArrowUp />
        </button>
      </a>
    </Container>
  );
};
