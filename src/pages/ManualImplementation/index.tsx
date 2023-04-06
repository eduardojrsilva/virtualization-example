import { Item } from './styles';
import Virtualizer from './Virtualizer';

function Row(index: number): JSX.Element {
  return <Item>Item {index + 1}</Item>;
}

function ManualImplementation(): JSX.Element {
  return (
    <Virtualizer
      containerHeight={200}
      containerWidth={200}
      itemHeight={35}
      itemCount={100000}
      gap={10}
      bufferSize={5}
    >
      {Row}
    </Virtualizer>
  );
}

export default ManualImplementation;
