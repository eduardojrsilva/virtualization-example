import { ItemContainer, VirtualizerContainer } from './styles';

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
  const calculateItemTop = (index: number): number => {
    if (index === 0) return 0;

    const itemWithGap = itemHeight + gap;

    const previousItemsHeight = itemWithGap * index;

    return previousItemsHeight;
  };

  const items = Array.from(new Array(itemCount));

  return (
    <VirtualizerContainer $height={containerHeight} $width={containerWidth}>
      {items.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ItemContainer key={`item-${index}`} $top={calculateItemTop(index)} $height={itemHeight}>
          {children(index)}
        </ItemContainer>
      ))}
    </VirtualizerContainer>
  );
}

export default Virtualizer;
