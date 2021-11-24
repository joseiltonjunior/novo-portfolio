import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  margin-top: 60px;

  .offcanvas {
    width: 300px;
    height: 100vh;
    color: #f5f5f5;

    background: linear-gradient(
      to bottom,
      ${props => props.theme.colors.primary},
      rgba(155, 155, 155, 0.5)
    );
  }

  .sidemenu {
    width: 300px;
    height: 100vh;
    color: #f5f5f5;
    padding-top: 20px;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.colors.primary},
      rgba(155, 155, 155, 0.5)
    );

    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .offcanvas-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;

    p {
      font-size: 20px;
      font-family: 'Roboto Medium';
      margin-bottom: 10px;
    }

    .profile-pic {
      width: 130px;
      height: 130px;
      border: 0.4rem solid rgba(255, 255, 255, 0.2);
      margin-bottom: 20px;

      @media screen and (max-width: 500px) {
        margin-top: 90px;
      }
    }
  }
`;
