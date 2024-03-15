import '../scss/App.scss'
import Header from './Header.jsx';
import Board from './Board.jsx';
import { useState } from 'react';

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [resultDice, setResultDice] = useState(null);
  const [stateGame, setStateGame] = useState('');

  const handleClickDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setResultDice(randomNumber);

    if (setResultDice === 4){
xxxxxx
    } else {
yyyyy
    }


  }

  const groguPosition () grogusetResultDice === 4 : X ? Y

  return (
    <>
    <Header />
    <main className="page">
    <Board />

        <section>
          <button className="dice" onClick={handleClickDice}>Lanzar Dado</button>
          <p>{resultDice}</p>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
      </>
  )
}

export default App
