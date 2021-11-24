import { SectionExperience } from 'components/SectionExperience';
import { SectionInital } from 'components/SectionInital';

import { Container } from './styles';

export const Content: React.FC = () => {
  return (
    <Container>
      <SectionInital />

      <SectionExperience />
    </Container>
  );
};
