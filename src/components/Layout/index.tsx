import { Content } from 'components/Content';
// import { GoToTop } from 'components/GoToTop';
import { Header } from 'components/Header';
import { SideMenu } from 'components/SideMenu';
import { ToolsMenu } from 'components/ToolsMenu';

import { Container } from './styles';

export const Layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <ToolsMenu />
      <SideMenu />

      <Content />

      {/* <GoToTop /> */}
    </Container>
  );
};
