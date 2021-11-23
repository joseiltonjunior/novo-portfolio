import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

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
