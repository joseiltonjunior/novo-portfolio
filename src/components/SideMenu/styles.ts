import styled from 'styled-components';

export const Container = styled.div`
  .offcanvas {
    max-width: 300px;
    color: #f5f5f5;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.colors.primary},
      #f5f5f5
    );
  }

  .offcanvas-header {
    justify-content: center;

    font-size: 20px;
    font-family: 'Roboto Medium';
  }

  .offcanvas-title-job {
    font-size: 18px;
    font-family: 'Roboto Regular';
  }

  .offcanvas-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;

    .div-icons {
      gap: 5px;
    }

    .profile-pic {
      width: 130px;
      height: 130px;
      border: 6px solid #f5f5f5;
      margin-bottom: 20px;
    }
  }
`;
