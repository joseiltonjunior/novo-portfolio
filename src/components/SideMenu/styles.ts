import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  .button-tools-menu {
    button {
      border: 0px;
      background-color: transparent;
    }

    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .offcanvas {
    width: 18rem;
    height: 100vh;
    color: #f5f5f5;

    background: linear-gradient(
      to bottom,
      ${props => props.theme.colors.primary},
      rgba(155, 155, 155, 0.5)
    );
  }

  .sidemenu {
    width: 18rem;
    height: 100vh;
    color: #f5f5f5;

    background: linear-gradient(
      to bottom,
      ${props => props.theme.colors.primary},
      rgba(155, 155, 155, 0.5)
    );

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .offcanvas-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 1.5rem;
      font-family: 'Roboto Medium';
      margin-bottom: 10px;
    }

    .profile-pic {
      width: 9rem;
      height: 9rem;
      border: 0.4rem solid rgba(255, 255, 255, 0.2);
      margin-bottom: 20px;
    }
  }

  .nav-list {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    flex-direction: column;

    button {
      border: 0;
      background-color: transparent;
      height: 40px;
      width: 100%;
      border-radius: 6px;

      font-size: 1.1rem;
      font-family: 'Roboto Regular';

      color: #f5f5f5;
      :hover {
        background-color: ${shade(0.1, 'rgba(155, 155, 155, 0.5)')};
      }
    }
  }
`;
