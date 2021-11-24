import React from 'react';

import { Container } from './styles';

import experience from './experience.json';

export const SectionExperience: React.FC = () => {
  return (
    <Container id="experience">
      <p className="title-experience">Experiência</p>

      <div className="content-experience">
        {experience.map((item, index) => (
          <div key={index}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p>{item.CARGO.toUpperCase()}</p>
                <p>{item.NOME_EMPRESA}</p>
              </div>
              <p>{item.TEMPO}</p>
            </div>
            <p>{item.ATIVIDADES}</p>

            <hr />
          </div>
        ))}
      </div>
    </Container>
  );
};
