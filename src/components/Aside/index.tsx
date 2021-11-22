import { SocialLinks } from 'components/SocialLinks';

import { useTranslation } from 'react-i18next';

import picProfile from 'assets/img/pic_profile.jpeg';
import { Container, TitleAside } from './styles';

export const Aside: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="aboveContent">
        <img
          src={picProfile}
          alt="picProfile"
          className="profilePic img-fluid rounded-circle"
        />

        <TitleAside>{t('titleAside')}</TitleAside>
        <SocialLinks />
      </div>
    </Container>
  );
};
