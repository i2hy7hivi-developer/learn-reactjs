import { useState } from 'react';
import Welcome from './components/Welcome'

function App() {
  const projects = ['My Rental Spot', 'Rentler', 'Business My Rental Spot'];

  return (
    <div>
      <h2>Porjects List</h2>
      <ul>
        {
          projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
