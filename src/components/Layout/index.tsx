import { Content } from 'components/Content';
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
    </Container>
  );
};
