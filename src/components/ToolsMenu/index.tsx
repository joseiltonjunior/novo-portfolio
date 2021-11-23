import React from 'react';

import { Container } from './styles';

export const ToolsMenu: React.FC = () => {
  return (
    <Container>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Configurações</h5>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
    </Container>
  );
};
