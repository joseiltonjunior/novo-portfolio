import React from 'react';

import { Container } from './styles';

interface FloatMenuProps {
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const FloatMenu: React.FC<FloatMenuProps> = ({
  toggleTheme,
  toggleLanguage,
}) => {
  return (
    <Container>
      <form action="">
        Tema
        <div className="d-flex">
          Light
          <div className="form-check form-switch">
            <input
              onChange={toggleTheme}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          Dark
        </div>
        Idioma
        <div className="d-flex">
          Português
          <div className="form-check form-switch">
            <input
              onChange={toggleLanguage}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          Inglês
        </div>
      </form>
    </Container>
  );
};
