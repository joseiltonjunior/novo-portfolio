import styled, { css } from 'styled-components';

type ButtonProps = {
  hasChildren?: boolean;
  noMargin?: boolean;
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem 0.2rem;

  height: 38px;

  ${props =>
    props.noMargin &&
    css`
      margin: 0;
    `}

  ${props =>
    props.hasChildren &&
    css`
      svg {
        margin-right: 0.2rem;
      }
    `}
`;
