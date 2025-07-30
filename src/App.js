import { useState } from 'react';
import Welcome from './components/Welcome'

function App() {
  const isLoggedIn = false;

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back!" : "Please login."}</h2>
    </div>
  );
}

export default App;
