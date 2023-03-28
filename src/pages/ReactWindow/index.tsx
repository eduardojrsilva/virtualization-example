import { CSSProperties } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';

import { Container, Item, StyledList } from './styles';

interface RowProps {
  index: number;
  style: CSSProperties;
}

const ROW_GAP = 15;

function Row({ index, style }: RowProps): JSX.Element {
  const styles = {
    ...style,
    height: Number(style.height) - ROW_GAP,
  };

  return <Item style={styles}>Item {index + 1}</Item>;
}

function ReactWindow(): JSX.Element {
  return (
    <Container>
      <AutoSizer>
        {({ height, width }) => (
          <StyledList
            height={height}
            width={width}
            itemCount={10000}
            itemSize={45}
            overscanCount={5}
          >
            {Row}
          </StyledList>
        )}
      </AutoSizer>
    </Container>
  );
}

export default ReactWindow;
