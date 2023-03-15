import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');

  const newButtonColor = color === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button onClick={() => setColor(newButtonColor)} style={{backgroundColor: color}}>Change to {newButtonColor}</button>
    </div>
  );
}

export default App;