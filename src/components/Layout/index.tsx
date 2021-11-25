import { Content } from 'components/Content';
import { SideMenu } from 'components/SideMenu';
import { ToolsMenu } from 'components/ToolsMenu';
import { FaBars } from 'react-icons/fa';

import { Container } from './styles';

export const Layout: React.FC = () => {
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

      <ToolsMenu />
      <SideMenu />

      <Content />
    </Container>
  );
};
