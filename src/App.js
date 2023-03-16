import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');
  const [check, setCheck] = useState(false);

  const newButtonColor = color === 'red' ? 'blue' : 'red';
  return (
    <div style={{display: 'flex', 'justify-content': 'center', 'align-items': 'center', height: '100vh'}}>
      <button onClick={() => setColor(newButtonColor)} disabled={check} style={{backgroundColor: color, height: '30px', color: check ? 'grey' : 'white'}}>Change to {newButtonColor}</button>
      
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={check} onChange={(e) => setCheck(e.target.checked)} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;