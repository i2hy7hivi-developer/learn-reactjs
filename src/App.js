import { useEffect, useState } from 'react';
import Welcome from './components/Welcome'

function App() {
  useEffect(() => {
    console.log('Component loaded.')
  });

  return (
    <div>
      Check the console.
    </div>
  );
}

export default App;
