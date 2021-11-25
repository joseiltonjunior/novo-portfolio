import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 12px;
  align-items: center;

  .content-experience {
    width: 100%;
    max-width: 1000px;
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
    margin: 0 0 20px 0;

    color: ${shade(0.2, '#f5f5f5')};

    @media screen and (max-width: 400px) {
      font-size: 0.8rem;
    }
  }

  .title-experience {
    font-size: 2rem;
    font-family: 'Roboto Medium';
    margin-bottom: 50px;

    width: 100%;
    max-width: 1000px;

    text-shadow: 1px 3px 0 #969696, 1px 5px 5px #aba8a8;

    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }
`;
