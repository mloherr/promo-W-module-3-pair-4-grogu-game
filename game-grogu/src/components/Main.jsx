import Board from "./Board.jsx";
import Dice from "./Dice.jsx";
import Form from "./Form.jsx";
import GameStatus from "./GameStatus.jsx";
import { Link } from "react-router-dom";

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
	userName,
}) {
	return (
		<main className="page">
			<GameStatus nameUser={name} />
			<Form nameUser={userName} nameInputUser={nameInputUser} />
			<Board groguPosition={groguPosition} />
			<section>
				<Dice onClick={rollDice} />
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
			<section className="state-game">
				<p>{stateGame}</p>
			</section>
			<section>
				<button className="restart-button" onClick={restartGame}>
					Reiniciar Juego
				</button>
			</section>
			<Link to="/instructions" className="footer__menu-link active">
				Instrucciones
			</Link>
		</main>
	);
}

export default Main;
