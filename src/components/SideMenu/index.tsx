import { SocialLinks } from 'components/SocialLinks';

// import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export const SideMenu: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <Container>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeft"
      >
        <div className="offcanvas-body">
          <img
            src="https://joseiltonjunior.github.io/Portfolio/img/perfil.jpeg"
            alt="picProfile"
            className="profile-pic img-fluid rounded-circle"
          />

          <p className="offcanvas-title" id="offcanvas-title">
            Junior Ferreira
          </p>

          <SocialLinks />

          <div>
            <a href="#experience">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                experience
              </button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
