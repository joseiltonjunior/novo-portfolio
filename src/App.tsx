import { useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import i18n from 'i18next';

import { Container } from 'styles';
import { SideMenu } from 'components/SideMenu';
import { Header } from 'components/Header';

import GlobalStyle from 'styles/global';
import light from 'styles/themes/light';

import { usePersistedState } from 'hooks/usePersistedState';
import { ToolsMenu } from 'components/ToolsMenu';

const App: React.FC = () => {
  const [theme] = usePersistedState<DefaultTheme>('theme', light);

  const lang = localStorage.getItem('i18nextLng') ?? '';

  useEffect(() => {
    if (lang === 'pt-BR') {
      i18n.changeLanguage('pt_BR');
    }
  }, [lang]);

  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <GlobalStyle />
        <Header />
        <SideMenu />
        <ToolsMenu />
      </Container>
    </ThemeProvider>
  );
};

export default App;
