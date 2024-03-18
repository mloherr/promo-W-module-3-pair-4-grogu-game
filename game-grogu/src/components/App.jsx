import '../scss/App.scss';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Dice from './Dice.jsx';
import { useState } from 'react';

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [resultDice, setResultDice] = useState(null);
  const [stateGame, setStateGame] = useState('');

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setResultDice(randomNumber);
    console.log(resultDice);

    if (randomNumber === 1) {
      cookies.pop();
      setCookies(cookies);
    }
    if (randomNumber === 2) {
      eggs.pop();
      setEggs(eggs);
    }

    if (randomNumber === 3) {
      frogs.pop();
      setFrogs(frogs);
    }
    if (randomNumber === 4) {
      setGroguPosition(groguPosition + 1); 
    }
  };

  const restartGame = () => {
    setCookies(['🍪', '🍪', '🍪']);
    setEggs(['🥚', '🥚', '🥚']);
    setFrogs(['🐸', '🐸', '🐸']);
    setGroguPosition(0);
  };

  return (
    <>
      <Header title="Cuidado con Grogu" />
      <main className="page">
        <Board groguPosition = {groguPosition} />

        <section>
          <Dice onClick={rollDice} />
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">{cookies}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{eggs}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{frogs}</div>
        </section>
        <section>
          <button className="restart-button"
          onClick={restartGame}>Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
