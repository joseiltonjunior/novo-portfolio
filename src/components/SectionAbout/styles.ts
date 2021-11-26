import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  margin: 4rem 3rem 0;
  align-items: center;

  @media screen and (max-width: 400px) {
    margin: 5rem 1rem;
  }

  .content-about {
    width: 100%;
    max-width: 70rem;
  }

  .title-about {
    font-size: 2rem;
    font-family: 'Roboto Medium';
    margin-bottom: 2rem;

    text-align: center;

    width: 100%;
    max-width: 70rem;

    text-shadow: 1px 1px 1px #969696, 1px 1px 1px #aba8a8;

    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }

  .text-description {
    font-family: 'Roboto Medium';
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    line-height: 2rem;
    color: ${props =>
      props.theme.title !== 'dark' &&
      css`
    shade(0.2, '#f5f5f5')
    `};

    text-align: center;

    @media screen and (max-width: 400px) {
      text-align: justify;
      letter-spacing: 0;
      font-size: 1rem;
    }
  }
`;
