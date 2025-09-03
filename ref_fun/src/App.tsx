import React, { useEffect, useRef, useState } from 'react';

function RefPracticeApp() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timerId = useRef<number | null>(null);
  const previousCount = useRef<number>(0);
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const startTimer = () => {
    if (timerId.current) return;
    if (message) {
      setMessage('');
    }

    timerId.current = setTimeout(() => {
      setCount((count) => count + 1);
      setMessage('Timer completed start another timer');
      timerId.current = null;
    }, 10000);
  };

  const cancelTimer = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
      timerId.current = null;
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Practice App</h2>

      <input ref={inputRef} placeholder="Focus me!" />

      <div style={{ margin: '1rem 0' }}>
        <button onClick={focusInput}>Focus Input</button>
        <button onClick={startTimer}>Start 10s Timer</button>
        <button onClick={cancelTimer}>Cancel Timer</button>
      </div>

      <p>✅ Timer completed: {count}</p>
      <p>🕓 Previous count: {previousCount.current}</p>
      <p>{message}</p>
    </div>
  );
}

export default RefPracticeApp;
