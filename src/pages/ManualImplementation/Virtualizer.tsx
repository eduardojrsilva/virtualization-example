import { useCallback, useEffect, useRef, useState } from 'react';

import { Container, ItemContainer, VirtualizerContainer } from './styles';

interface VirtualizerProps {
  containerHeight: number;
  containerWidth: number;
  itemHeight: number;
  itemCount: number;
  gap?: number;
  children: (index: number) => JSX.Element;
}

function Virtualizer({
  containerHeight,
  containerWidth,
  itemHeight,
  itemCount,
  gap = 0,
  children,
}: VirtualizerProps): JSX.Element {
  const [displayingItems, setDisplayingItems] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>();

  const items = Array.from(new Array(itemCount));

  const calculateItemTop = (index: number): number => {
    if (index === 0) return 0;

    const itemWithGap = itemHeight + gap;

    const previousItemsHeight = itemWithGap * index;

    return previousItemsHeight;
  };

  const itemTopPositions: Record<number, number> = items.reduce((acc, item, index) => {
    const itemTop = calculateItemTop(index);

    const positions = {
      ...acc,
      [index]: itemTop,
    };

    return positions;
  }, {});

  const handleScroll = useCallback(() => {
    const { scrollTop } = containerRef.current;
    const contentRenderedUntil = scrollTop + containerHeight;

    const displaying = items.reduce((acc, _, index) => {
      const itemTop = itemTopPositions[index];

      if (itemTop + itemHeight >= scrollTop && itemTop <= contentRenderedUntil) {
        return [...acc, index];
      }

      return acc;
    }, []);

    setDisplayingItems(displaying);
  }, [containerHeight, itemHeight, itemTopPositions, items]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <Container>
      <VirtualizerContainer
        ref={containerRef}
        $height={containerHeight}
        $width={containerWidth}
        onScroll={handleScroll}
      >
        {items.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemContainer key={`item-${index}`} $top={itemTopPositions[index]} $height={itemHeight}>
            {children(index)}
          </ItemContainer>
        ))}
      </VirtualizerContainer>

      {!!displayingItems.length && (
        <div>
          <strong>Items em tela: </strong>

          <span>{displayingItems.map((itemIndex) => itemIndex + 1).join(', ')}</span>
        </div>
      )}
    </Container>
  );
}

export default Virtualizer;
