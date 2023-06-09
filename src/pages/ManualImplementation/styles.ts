import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 100px;
`;

interface VirtualizerContainerProps {
  $height: number;
  $width: number;
}

export const VirtualizerContainer = styled.div<VirtualizerContainerProps>`
  position: relative;
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
  overflow: auto;
`;

interface FullListContainerProps {
  $height: number;
}

export const FullListContainer = styled.div<FullListContainerProps>`
  height: ${({ $height }) => $height}px;
`;

interface ItemProps {
  $top: number;
  $height: number;
}

export const ItemContainer = styled.div<ItemProps>`
  position: absolute;
  top: ${({ $top }) => $top}px;

  width: 100%;
  height: ${({ $height }) => $height}px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  border-radius: 5px;
  background: #7499d6;
  color: #fff;
`;
