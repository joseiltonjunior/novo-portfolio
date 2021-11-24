import { ThemesProvider } from 'hooks/theme';
import React from 'react';
import { FormProvider } from './form';

const Hooks: React.FC = ({ children }) => (
  <ThemesProvider>
    <FormProvider>{children}</FormProvider>
  </ThemesProvider>
);

export default Hooks;
