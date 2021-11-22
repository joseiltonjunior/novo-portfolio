import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import i18n from 'i18next';

import { Container } from 'styles';
import { Aside } from 'components/Aside';
import { Header } from 'components/Header';

import GlobalStyle from 'styles/global';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

import { usePersistedState } from 'hooks/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [language, setLanguage] = useState('pt_BR');

  const lang = localStorage.getItem('i18nextLng');

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'pt_BR' ? 'en_US' : 'pt_BR');
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} toggleLanguage={toggleLanguage} />
        <Aside />
      </Container>
    </ThemeProvider>
  );
};

export default App;
