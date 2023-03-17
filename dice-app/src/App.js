import './App.css';
import { useState } from 'react';

import DiceImage1 from "./images/dice1.png";
import DiceImage2 from "./images/dice2.png";
import DiceImage3 from "./images/dice3.png";
import DiceImage4 from "./images/dice4.png";
import DiceImage5 from "./images/dice5.png";
import DiceImage6 from "./images/dice6.png";



function App() 
{
  var diceImages = [
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6,

  ]

  const [image, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])
  const [result, setResult] = useState ('')
  const rollDice = () => {
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);
    if (randomNum1 === randomNum2){
      setResult("You won!");
    }
    else {
      setResult("You lost!");
    }
  }
  return (
    <div className="App">
      <center>      
        <h1>Dice Rolling App</h1>
        <div className='container'>
          <img src = {image} alt = "Logo"></img>
          <img src = {image2} alt = "Logo"></img>
          
        </div>
        <button onClick={rollDice}>Roll!</button>
        <h2>{result}</h2>

        </center>


    </div>
  );
};

export default App;
