import { useEffect, useRef, useState } from 'react';

import { Container, FullListContainer, ItemContainer, VirtualizerContainer } from './styles';

interface VirtualizerProps {
  containerHeight: number;
  containerWidth: number;
  itemHeight: number;
  itemCount: number;
  bufferSize?: number;
  gap?: number;
  children: (index: number) => JSX.Element;
}

function Virtualizer({
  containerHeight,
  containerWidth,
  itemHeight,
  itemCount,
  bufferSize = 0,
  gap = 0,
  children,
}: VirtualizerProps): JSX.Element {
  const [displayingItems, setDisplayingItems] = useState<number[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>();

  const itemWithGap = itemHeight + gap;

  const calculateItemTop = (index: number): number => {
    if (index === 0) return 0;

    const previousItemsHeight = itemWithGap * index;

    return previousItemsHeight;
  };

  const handleScroll = (): void => {
    const { scrollTop } = containerRef.current;

    const startItem = Math.floor(scrollTop / itemWithGap);

    const endItem = startItem + Math.floor(containerHeight / itemWithGap);

    const startBuffer = bufferSize > startItem ? startItem : startItem - bufferSize;

    const itemCountIndex = itemCount - 1;

    const endBuffer = endItem + bufferSize > itemCountIndex ? itemCountIndex : endItem + bufferSize;

    setDisplayingItems(
      Array.from({ length: endBuffer - startBuffer + 1 }, (_, index) => index + startBuffer),
    );
  };

  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <VirtualizerContainer
        ref={containerRef}
        $height={containerHeight}
        $width={containerWidth}
        onScroll={handleScroll}
      >
        <FullListContainer $height={itemWithGap * itemCount}>
          {displayingItems.map((index) => (
            <ItemContainer
              // eslint-disable-next-line react/no-array-index-key
              key={`item-${index}`}
              $top={calculateItemTop(index)}
              $height={itemHeight}
            >
              {children(index)}
            </ItemContainer>
          ))}
        </FullListContainer>
      </VirtualizerContainer>

      <div>
        <strong>Itens renderizados: </strong>

        <span>{displayingItems.map((itemIndex) => itemIndex + 1).join(', ')}</span>
      </div>
    </Container>
  );
}

export default Virtualizer;
