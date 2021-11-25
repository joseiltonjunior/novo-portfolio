import styled from 'styled-components';
import backgroundImg from 'assets/img/background.jpg';

export const Container = styled.div``;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #f5f5f5;

  .trails-main {
    margin-bottom: 1rem;

    @media screen and (max-width: 500px) {
      margin-bottom: 5rem;
    }
  }

  .trails-title {
    font-size: 5rem;
    font-family: 'Roboto Medium';

    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

    @media screen and (max-width: 500px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 2rem;
    }
  }

  .trails-text {
    font-size: 1.3em;

    text-shadow: 0 0 10px #030b16;
  }
`;
