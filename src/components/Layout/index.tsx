import { Header } from 'components/Header';
import { SideMenu } from 'components/SideMenu';
import { ToolsMenu } from 'components/ToolsMenu';
import React from 'react';

import { Container, Background } from './styles';

export const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <SideMenu />
      <ToolsMenu />
      <div>
        <section className="section-1">
          <Background>
            <div>
              <h1>Junior Ferreira</h1>

              <p>Desenvolvedor Web</p>
            </div>
          </Background>
        </section>
        <section className="section-2">
          <h1>Sobre</h1>

          <p>Apaixonado por Tecnologia, Inovação e Desenvolvimento.</p>
        </section>
      </div>
    </Container>
  );
};
