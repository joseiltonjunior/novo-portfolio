import React from 'react';

import { useTranslation } from 'react-i18next';
import { Container } from './styles';

import experience from './experience.json';

export const SectionExperience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="experience">
      <p className="title-experience">{t('experienceTitle')}</p>

      <div className="content-experience">
        {experience.map((item, index) => (
          <div key={index}>
            <div>
              <p className="font-office">{item.CARGO.toUpperCase()}</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="font-small">{item.NOME_EMPRESA}</p>
                <p className="font-small">{item.TEMPO}</p>
              </div>
            </div>
            <p className="font-activities">{item.ATIVIDADES}</p>

            {index + 1 !== experience.length && <hr />}
          </div>
        ))}
      </div>
    </Container>
  );
};
