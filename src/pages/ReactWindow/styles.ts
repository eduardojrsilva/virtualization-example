import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 200px;

  background: gray;
`;

export const StyledList = styled(List)`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 99px;
    background: #fff;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background: #7499d6;
  color: #fff;
`;
