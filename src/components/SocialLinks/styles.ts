import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div``;

export const SocialButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f5f5f5;
  border: 0;
  color: ${props => props.theme.colors.primary};
  transition: all 0.3s;
  margin: 5px;

  &:hover {
    background: ${shade(0.1, '#f5f5f5')};
  }
`;
