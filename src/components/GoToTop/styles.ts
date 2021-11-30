import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 50px;

  button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0;
    background-color: #f5f5f5;

    transition: all 0.2s;

    :hover {
      background-color: ${shade(0.2, '#f5f5f5')};
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
