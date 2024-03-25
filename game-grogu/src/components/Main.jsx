import Board from "./Board.jsx";
import Dice from "./Dice.jsx";
import Form from "./Form.jsx";
import GameStatus from "./GameStatus.jsx";

function Main({
  groguPosition,
  rollDice,
  nameInputUser,
  cookies,
  name,
  eggs,
  frogs,
  stateGame,
  restartGame,
}) {
  return (
    <main className="page">
      <Board groguPosition={groguPosition} />
      <Form nameUser={name} nameInputUser={nameInputUser} />
      <section>
        <Dice onClick={rollDice} />
      </section>
      <GameStatus nameUser={name} />
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
        <p>{stateGame}</p>
        <button className="restart-button" onClick={restartGame}>
          Reiniciar Juego
        </button>
      </section>
    </main>
  );
}

export default Main;
