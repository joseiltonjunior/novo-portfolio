import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 60px;
  width: 100vw;
  background: ${props => props.theme.colors.primary};
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px;

  z-index: 1000;

  @media screen and (max-width: 400px) {
    justify-content: space-between;
  }

  .button-side-menu {
    display: none;

    @media screen and (max-width: 400px) {
      display: block;
    }
  }

  .title-header {
    font-size: 20px;
    font-family: 'Roboto Medium', sans-serif;
  }

  .button-side-menu {
    button {
      border: 0px;
      background-color: transparent;
    }
  }

  .button-tools-menu {
    button {
      border: 0px;
      background-color: transparent;
    }
  }
`;
