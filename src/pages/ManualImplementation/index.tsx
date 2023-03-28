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
      itemHeight={30}
      itemCount={100}
      gap={10}
    >
      {Row}
    </Virtualizer>
  );
}

export default ManualImplementation;
