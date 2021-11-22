import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primary},
    #f5f5f5
  );
  width: 300px;
  height: Calc(100vh - 60px);

  .aboveContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;

    .div-icons {
      gap: 5px;
    }

    .profilePic {
      width: 130px;
      height: 130px;
      border: 6px solid #f5f5f5;
      margin-bottom: 20px;
    }
  }
`;

export const TitleAside = styled.p`
  font-size: 20px;
  font-family: 'Roboto Medium';
  color: #f5f5f5;
`;
