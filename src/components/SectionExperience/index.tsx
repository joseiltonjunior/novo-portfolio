import React from 'react';

import { Container } from './styles';

export const SectionExperience: React.FC = () => {
  return (
    <Container id="experience">
      <h3>EXPERIÊNCIA</h3>

      <div>
        <p>Desenvolvimento de Softwares</p>
        <p>Havan Labs,</p>
        <p>
          Desenvolvimento de Sistemas Web utilizando Typescript como principal
          linguaguem, a biblioteca React e todo seu ecossistema.
        </p>
        <p>Abril 2020 - Atual</p>
      </div>
      <hr />

      <div>
        <p>Desenvolvimento de Softwares</p>
        <p>TRINITY SOLUTIONS</p>
        <p>
          Desenvolvimento de Aplicações Mobile utilizando Javascript como
          principal linguaguem, a biblioteca React Native e todo seu
          ecossistema.
        </p>
        <p>Março 2020 - Abril 2021</p>
      </div>
      <hr />

      <div>
        <p>SUPORTE TÉCNICO</p>
        <p>EXÉRCITO BRASILEIRO</p>
        <p>
          Manutenção de Computadores, Notebooks e na Rede do Quartel onde sirvo,
          presto também serviços de Designer e Fotografo.
        </p>
        <p>Maio 2018 - Março 2020</p>
      </div>
      <hr />
      <div>
        <p>AUXILIAR ADMINISTRATIVO</p>
        <p>EXÉRCITO BRASILEIRO</p>
        <p>
          Elaboração de documentos administrativos, boletins, planilhas,
          apresentações, protocolo e arquivamento de documentos.
        </p>
        <p>Maio 2015 - Março 2020</p>
      </div>
    </Container>
  );
};
