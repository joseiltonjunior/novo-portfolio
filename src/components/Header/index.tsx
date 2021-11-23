import { FaBars, FaUserCog } from 'react-icons/fa';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
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

      <div className="title-header">
        <p>Junior Ferreira</p>
      </div>

      <div className="button-tools-menu">
        <p>
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <FaUserCog fill="#fff" size={25} />
          </button>
        </p>
      </div>
    </Container>
  );
};
