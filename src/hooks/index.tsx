import React from 'react';
import { FormProvider } from './form';

const Hooks: React.FC = ({ children }) => (
  <FormProvider>{children}</FormProvider>
);

export default Hooks;
