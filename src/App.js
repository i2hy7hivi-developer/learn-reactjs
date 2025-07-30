import { useState } from 'react';
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(69);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 10)}>+ Increment</button>
      <button onClick={() => setCount(count - 1)}>- Decrement</button>
    </div>
  );
}

export default App;
