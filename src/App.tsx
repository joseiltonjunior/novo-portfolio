import { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Container } from 'styles';
import { Aside } from 'components/Aside';
import { Header } from 'components/Header';

import GlobalStyle from 'styles/global';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

import { usePersistedState } from 'hooks/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Aside />
      </Container>
    </ThemeProvider>
  );
};

export default App;
