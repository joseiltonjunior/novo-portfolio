import styled from 'styled-components';

export const Container = styled.div`
  flex-wrap: wrap;

  select {
    height: 38px;
    font-size: 0.9375rem;
    border: 0px;
  }

  label {
    font-size: 0.9375rem;
    white-space: nowrap;
  }
`;

export const Error = styled.div`
  height: 18px;
  font-size: 0.875rem;
  display: flex;

  justify-content: flex-end;

  span {
    color: #f5f5f5;
  }
`;
