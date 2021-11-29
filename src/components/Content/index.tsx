import { ImgSeparator } from 'components/Content/ImgSeparator';
import SectionAbout from 'components/SectionAbout';
import { SectionEducation } from 'components/SectionEducation';
import { SectionExperience } from 'components/SectionExperience';
import { SectionInital } from 'components/SectionInital';

import { Container } from './styles';

export const Content: React.FC = () => {
  return (
    <Container>
      <SectionInital />
      <SectionAbout />
      <ImgSeparator order={1} title="FIRST MOBILE" />

      <SectionExperience />
      <ImgSeparator order={2} title="RESPONSIVE" />

      <SectionEducation />

      <ImgSeparator order={3} title="Modern" />
    </Container>
  );
};
