import React, { SelectHTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import { Container, Error } from './styles';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  name: string;
  width?: string;
  error?: FieldError;
  register: UseFormRegister<FieldValues>;
};

export const Select: React.FC<SelectProps> = ({
  error = null,
  label,
  width = 'col-12',
  name,
  register,
  children,
  ...rest
}) => {
  return (
    <Container className={width}>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        {...register(name)}
        {...rest}
        className={`form-select ${error && 'is-invalid'}`}
      >
        {children}
      </select>
      <Error>
        <span>{error?.message}</span>
      </Error>
    </Container>
  );
};
