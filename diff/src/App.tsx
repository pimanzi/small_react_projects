import { useState } from 'react';

function Counter({ label }: { label: string }) {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h3>{label}</h3>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default function App() {
  const [order, setOrder] = useState(true);

  const items = order
    ? [
        { id: 'a', label: 'First' },
        { id: 'b', label: 'Second' },
      ]
    : [
        { id: 'b', label: 'Second' },
        { id: 'a', label: 'First' },
      ];

  return (
    <div>
      <button onClick={() => setOrder(!order)}>Toggle Order</button>
      {items.map((item) => (
        <Counter label={item.label} />
      ))}
    </div>
  );
}
