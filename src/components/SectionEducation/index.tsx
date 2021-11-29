import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

import education from './education.json';

export const SectionEducation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <p className="title-education">{t('educationTitle')}</p>

      <div className="content-education">
        {education.map((item, index) => (
          <div key={index}>
            <div>
              <p className="font-office">{item.CARGO.toUpperCase()}</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="font-small">{item.NOME_EMPRESA}</p>
                <p className="font-small">{item.TEMPO}</p>
              </div>
            </div>
            <p className="font-activities">{item.ATIVIDADES}</p>

            {index + 1 !== education.length && <hr />}
          </div>
        ))}
      </div>
    </Container>
  );
};
