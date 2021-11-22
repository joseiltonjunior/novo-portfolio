import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  /* color: ${props => props.theme.colors.secundary}; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  .switch-input {
    padding-right: 30px;
  }

  .contentIcon {
    width: 300px;
    height: 100%;
    color: #f5f5f5;

    padding-left: 30px;

    p {
      font-size: 22px;
      font-family: 'Roboto Medium', sans-serif;
      margin: 0 0 0 1rem;
    }
  }
`;
