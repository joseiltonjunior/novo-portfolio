import { Select } from 'components/Form/Select';
import formValidator from 'components/ToolsMenu/formValidator';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { Button } from 'components/Form/Button';
import { FaSave } from 'react-icons/fa';
import { ButtonGroup } from 'components/Form/ButtonGroup';
import { Container } from './styles';

interface formParam {
  Theme: string;
  Language: string;
}

export const ToolsMenu: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formValidator),
  });

  const lang = localStorage.getItem('i18nextLng') ?? '';
  const theme = localStorage.getItem('theme') ?? '';

  const onSubmit = useCallback((data: formParam) => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  useEffect(() => {
    setValue('Language', lang);

    if (theme !== '') {
      const themeFormart = JSON.parse(theme);

      setValue('Theme', themeFormart.title);
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Select
              name="Theme"
              label="Tema"
              register={register}
              error={errors.Theme}
            >
              <option value="">Selecione</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
            <Select
              name="Language"
              label="Idioma"
              register={register}
              error={errors.Language}
            >
              <option value="">Selecione</option>
              <option value="en_US">Inglês (USA)</option>
              <option value="pt_BR">Português (BRL)</option>
            </Select>

            <ButtonGroup align="center">
              <button
                className="btn btn-danger"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Cancelar
              </button>
              <Button icon={FaSave} className="btn btn-primary" type="submit">
                Salvar
              </Button>
            </ButtonGroup>
          </form>
        </div>
      </div>
    </Container>
  );
};
