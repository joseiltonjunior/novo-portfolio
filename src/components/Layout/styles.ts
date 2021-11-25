import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  .button-side-menu {
    position: fixed;

    button {
      background-color: transparent;
      border: 0;
    }

    z-index: 1000;
    margin: 20px;

    @media screen and (min-width: 400px) {
      display: none;
    }
  }
`;
