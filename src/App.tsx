import { useEffect } from 'react';
import i18n from 'i18next';

import GlobalStyle from 'styles/global';

import { Layout } from 'components/Layout';

const App: React.FC = () => {
  const lang = localStorage.getItem('i18nextLng') ?? '';

  useEffect(() => {
    if (lang === 'pt-BR') {
      i18n.changeLanguage('pt_BR');
    }
  }, [lang]);

  return (
    <div className="App">
      <GlobalStyle />
      <Layout />
    </div>
  );
};

export default App;
