import { Container } from './styles';

interface FloatMenuProps {
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const FloatMenu: React.FC<FloatMenuProps> = ({
  toggleTheme,
  toggleLanguage,
}) => {
  // const [langStatus, setLangStatus] = useState(false);

  // const verifyLang = useMemo(() => {
  //   const lang = localStorage.getItem('i18nextLng');

  //   console.log(lang);

  //   if (lang) {
  //     if (lang === 'en_US') {
  //       setLangStatus(true);

  //       return;
  //     }

  //     setLangStatus(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   const lang = localStorage.getItem('i18nextLng');

  //   console.log(lang);

  //   if (lang) {
  //     if (lang === 'en_US') {
  //       setLangStatus(true);

  //       return;
  //     }

  //     setLangStatus(false);
  //   }
  // }, []);
  return (
    <Container>
      <div className="content">
        <div className="collapse collapse-horizontal" id="collapseTools">
          <div className="card card-body">
            <form action="">
              Tema
              <div className="d-flex">
                Light
                <div className="form-check form-switch">
                  <input
                    onChange={toggleTheme}
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                Dark
              </div>
              Idioma
              <div className="d-flex">
                Português
                <div className="form-check form-switch">
                  <input
                    onChange={toggleLanguage}
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                Inglês
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
