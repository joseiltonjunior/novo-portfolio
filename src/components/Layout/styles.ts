import styled from 'styled-components';
import backgroundImg from 'assets/img/background.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;

  height: 100vh;
`;
