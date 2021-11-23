import styled, { css } from 'styled-components';

type Props = {
  margin?: boolean;
  align?: 'left' | 'right' | 'center' | 'between';
};

export const Container = styled.div<Props>`
  margin: 10px 0 0 0;
  flex: 1;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  ${props =>
    props.margin &&
    css`
      margin: 1rem 0;
    `}

  @media screen and (min-width: 750px) {
    ${props =>
      props.align === 'left' &&
      css`
        justify-content: flex-start;
      `}
    ${props =>
      props.align === 'center' &&
      css`
        justify-content: center;
      `}
    ${props =>
      props.align === 'right' &&
      css`
        justify-content: flex-end;
      `}
    ${props =>
      props.align === 'between' &&
      css`
        justify-content: space-between;
      `}
  }
`;
