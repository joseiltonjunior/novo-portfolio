import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${shade(0.07, '#fff')};
  width: 300px;
  height: Calc(100vh - 60px);

  .aboveContent {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    .profilePic {
      width: 120px;
    }
  }
`;
