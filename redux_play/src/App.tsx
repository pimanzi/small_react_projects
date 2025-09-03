import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './state/store';
import { changeColor, login, logout, revertColor } from './state/infoSlice';
import { useState } from 'react';

function App() {
  const name = useSelector((state: RootState) => state.info.name);
  const age = useSelector((state: RootState) => state.info.age);
  const email = useSelector((state: RootState) => state.info.email);
  const color = useSelector((state: RootState) => state.info.color);
  const [input, setInput] = useState<string>('');

  const dispatch = useDispatch();
  return (
    <div className="root">
      <h1 style={{ color: color }}>Profile</h1>
      <h2 style={{ color: color }}>Name {name}</h2>
      <h2 style={{ color: color }}> Age {age}</h2>
      <h2 style={{ color: color }}>Email {email}</h2>
      <div className="actions">
        <button onClick={() => dispatch(login())}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>

      <div className="user">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></input>
        <button onClick={() => dispatch(changeColor(input))}>
          Change Color
        </button>
        <button onClick={() => dispatch(revertColor())}>Revert Color</button>
      </div>
    </div>
  );
}

export default App;
