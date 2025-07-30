import { useState } from 'react';
import Welcome from './components/Welcome'

function App() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Enter Your Name" onChange={handleChange} />
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default App;
