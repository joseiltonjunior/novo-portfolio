import React from 'react';
import { FaBars } from 'react-icons/fa';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="button-side-menu">
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLeft"
          aria-controls="offcanvasLeft"
        >
          <FaBars fill="#fff" size={25} />
        </button>
      </div>
    </Container>
  );
};
