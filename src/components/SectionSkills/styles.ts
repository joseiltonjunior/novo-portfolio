import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 3rem 0;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media screen and (max-width: 400px) {
    margin: 5rem 1rem;
  }

  .content-skills {
    width: 100%;
    max-width: 70rem;
  }

  .title-skills {
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

  .content-icons {
    svg {
      margin: 10px;
      height: 3rem;
      width: 3rem;
      fill: #969696;

      :hover {
        fill: #f5f5f5;
      }
    }
  }
`;
