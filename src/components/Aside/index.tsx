import { SocialLinks } from 'components/SocialLinks';

import { useTranslation } from 'react-i18next';

import { Container, TitleAside } from './styles';

export const Aside: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="aboveContent">
        <img
          src="https://avatars.githubusercontent.com/u/47725788?v=4"
          alt="picProfile"
          className="profilePic img-fluid rounded-circle"
        />

        <TitleAside>{t('titleAside')}</TitleAside>
        <SocialLinks />
      </div>
    </Container>
  );
};
