import { SocialLinks } from 'components/SocialLinks';

import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export const SideMenu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeft"
      >
        <div className="offcanvas-header">
          <p className="offcanvas-title" id="offcanvas-title">
            Junior Ferreira
          </p>
        </div>
        <div className="offcanvas-body">
          <img
            src="https://avatars.githubusercontent.com/u/47725788?v=4"
            alt="picProfile"
            className="profile-pic img-fluid rounded-circle"
          />

          <p className="offcanvas-title-job" id="offcanvas-title-job">
            {t('titleAside')}
          </p>

          <SocialLinks />
        </div>
      </div>
    </Container>
  );
};
