import { Select } from 'components/Form/Select';
import React, { useCallback, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import i18next from 'i18next';
import { usePersistedState } from 'hooks/usePersistedState';
import { DefaultTheme } from 'styled-components';

import light from 'styles/themes/light';
import dark from 'styles/themes/dark';
import { Container } from './styles';

export const ToolsMenu: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>();

  const lang = localStorage.getItem('i18nextLng') ?? '';

  const handleChangeLanguage = useCallback((language: string) => {
    i18next.changeLanguage(language);

    window.location.reload();
  }, []);

  const handleChangeTheme = useCallback(
    (theme: string) => {
      setTheme(theme === 'light' ? light : dark);

      window.location.reload();
    },
    [setTheme],
  );

  useEffect(() => {
    setValue('Language', lang);

    setValue('Theme', theme.title);
  }, [lang, setValue, theme]);

  return (
    <Container>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Configurações</h5>
        </div>
        <div className="offcanvas-body">
          <Select
            name="Theme"
            label="Tema"
            register={register}
            error={errors.Theme}
            onChange={event => {
              handleChangeTheme(event.currentTarget.value);
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Select>
          <Select
            name="Language"
            label="Idioma"
            register={register}
            onChange={event => {
              handleChangeLanguage(event.currentTarget.value);
            }}
            error={errors.Language}
          >
            <option value="en_US">Inglês (USA)</option>
            <option value="pt_BR">Português (BRL)</option>
          </Select>
        </div>
      </div>
    </Container>
  );
};
