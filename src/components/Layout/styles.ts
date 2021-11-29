import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  .button-side-menu {
    position: fixed;
    z-index: 1000;
    margin: 20px;

    button {
      background-color: transparent;
      border: 0;
    }

    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;
