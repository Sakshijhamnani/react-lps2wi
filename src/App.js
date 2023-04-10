import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const addOnMoreNumber = () => {
    setRandomNumbers([Math.round(Math.random() * 100), ...randomNumbers]);
  };

  
  return (
    <div>
      <button onClick={addOnMoreNumber}>Add Random Number</button>
      
     
      <ul>
       <h3>Random Numbers</h3>
        {randomNumbers.map((number) => (
        
          <table className="">
            <tr>
            <td>{number}</td>
            </tr>
            </table>
        ))}
      </ul>
    </div>
  );
}
