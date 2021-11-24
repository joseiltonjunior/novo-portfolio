import styled from 'styled-components';

export const Container = styled.div`
  .offcanvas {
    max-width: 300px;
    color: #f5f5f5;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.colors.primary},
      rgba(155, 155, 155, 0.5)
    );
  }

  .offcanvas-header {
    justify-content: center;

    font-size: 20px;
    font-family: 'Roboto Medium';
  }
`;
