import type { AppDispatch, RootState } from './state/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  // incrementByAmount,
  asyncIncrement,
} from './state/counter/counterSlice.';
function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(asyncIncrement(10))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
