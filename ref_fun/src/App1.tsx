import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);
  const prevCount = useRef<number>(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
