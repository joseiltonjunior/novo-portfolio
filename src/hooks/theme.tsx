import { usePersistedState } from 'hooks/usePersistedState';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import light from 'styles/themes/light';

const ThemesProvider: React.FC = ({ children }) => {
  const [theme] = usePersistedState<DefaultTheme>('theme', light);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { ThemesProvider };
