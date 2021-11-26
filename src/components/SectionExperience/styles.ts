import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 3rem 2rem;
  align-items: center;

  @media screen and (max-width: 400px) {
    margin: 1rem 1rem 2rem;
  }

  .content-experience {
    width: 100%;
    max-width: 70rem;
  }

  .font-office {
    font-family: 'Roboto Black';
    font-size: 1rem;

    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
  }

  .font-activities {
    font-family: 'Roboto Medium';
    font-size: 1rem;

    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
  }

  .font-small {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: ${shade(0.2, '#f5f5f5')};

    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
  }

  .title-experience {
    font-size: 2rem;
    font-family: 'Roboto Medium';
    margin-bottom: 2rem;

    width: 100%;
    max-width: 70rem;

    text-shadow: 1px 1px 1px #969696, 1px 1px 1px #aba8a8;

    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }
`;
