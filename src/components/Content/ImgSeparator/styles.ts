import styled, { css } from 'styled-components';
import backgroundImg from 'assets/img/background3.jpg';
import backgroundImg2 from 'assets/img/background1.jpg';
import backgroundImg3 from 'assets/img/background2.jpg';

interface imgOrderParam {
  order: number;
}

export const Container = styled.div<imgOrderParam>`
  ${param =>
    param.order === 1 &&
    css`
      background: url(${backgroundImg}) no-repeat;
    `}

  ${param =>
    param.order === 2 &&
    css`
      background: url(${backgroundImg2}) no-repeat;
    `}

    ${param =>
    param.order === 3 &&
    css`
      background: url(${backgroundImg3}) no-repeat;
    `}

  background-color: red;
  height: 300px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  /* margin: 5rem 0; */

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
