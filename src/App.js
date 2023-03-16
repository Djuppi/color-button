import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export const replaceCamelWithSpaces = (colorName) => {
    return colorName.replace(/\B([A-Z])\B/g, ' $1')
};

function App() {
  const [color, setColor] = useState('MediumVioletRed');
  const [check, setCheck] = useState(false);

  const newButtonColor =  color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <button onClick={() => setColor(newButtonColor)} disabled={check} style={{backgroundColor: check ? 'grey' : color, height: '30px', color: 'white'}}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>
      
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={check} onChange={(e) => setCheck(e.target.checked)} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;