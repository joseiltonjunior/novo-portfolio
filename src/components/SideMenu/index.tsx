import { SocialLinks } from 'components/SocialLinks';
import { MdSettingsSuggest } from 'react-icons/md';

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
          <div className="button-tools-menu">
            <p>
              <button
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <MdSettingsSuggest fill="#fff" size={25} />
              </button>
            </p>
          </div>

          <img
            src="https://joseiltonjunior.github.io/Portfolio/img/perfil.jpeg"
            alt="picProfile"
            className="profile-pic img-fluid rounded-circle"
          />

          <p className="offcanvas-title" id="offcanvas-title">
            Junior Ferreira
          </p>

          <SocialLinks />

          <div className="nav-list">
            <a href="#home">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Home
              </button>
            </a>
            <a href="#about">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Sobre
              </button>
            </a>
            <a href="#experience">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Experiências
              </button>
            </a>
          </div>
        </div>
      </div>

      <div
        className="sidemenu"
        tabIndex={-1}
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeft"
      >
        <div className="offcanvas-body">
          <div className="button-tools-menu">
            <p>
              <button
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <MdSettingsSuggest fill="#fff" size={25} />
              </button>
            </p>
          </div>

          <img
            src="https://joseiltonjunior.github.io/Portfolio/img/perfil.jpeg"
            alt="picProfile"
            className="profile-pic img-fluid rounded-circle"
          />

          <p className="offcanvas-title" id="offcanvas-title">
            Junior Ferreira
          </p>

          <SocialLinks />

          <div className="nav-list">
            <a href="#home">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Home
              </button>
            </a>
            <a href="#about">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Sobre
              </button>
            </a>
            <a href="#experience">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Experiências
              </button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
