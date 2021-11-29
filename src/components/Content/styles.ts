import styled from 'styled-components';
import backgroundImg from 'assets/img/background1.jpg';

export const Container = styled.div`
  margin-left: 18rem;
  overflow-y: auto;

  width: 100%;

  @media screen and (max-width: 900px) {
    margin-left: 0px;
  }
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat;
  height: 300px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5rem 0;

  .trails-text {
    font-size: 2.5rem;
    font-family: 'Roboto Black';
    color: #f5f5f5;
    text-shadow: 1px 3px 0 #030b16, 1px 13px 5px #030b16;
    letter-spacing: 1rem;

    @media screen and (max-width: 700px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
`;
