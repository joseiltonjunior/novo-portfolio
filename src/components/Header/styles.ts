import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(155, 155, 155, 0.5);
  width: 100vw;
  position: fixed;
  padding: 10px;
  display: flex;

  transition: all 0.2s;

  @media screen and (min-width: 900px) {
    display: none;
  }

  .button-side-menu {
    button {
      background-color: transparent;
      border: 0;
    }
  }
`;
