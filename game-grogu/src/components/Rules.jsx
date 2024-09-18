import { Link } from "react-router-dom";

function Rules() {
	return (
		<section className="instructions">
			<div className="instructions__write">
				<p className="instructions__write-p">👋 ¡Hola, aventurero!</p>
				<p>
					Prepárate para una emocionante carrera contra Grogu, el tierno pero
					astuto buscador de snacks. Tu objetivo es recolectar todos los tesoros
					antes de que él complete su camino. ¿Listo para la acción?
				</p>
				<h2>🎲 Cómo se juega</h2>
				<p className="instructions__write-p">
					Presiona el botón «¡Tira el dado!» y mira qué número sacas:
				</p>
				<ul>
					<li>
						1: ¡Has encontrado una galleta deliciosa! 🍪 Añádela a tu colección.
					</li>
					<li>2: ¡Un huevo se une a tu botín! 🥚 Suma tantos como puedas.</li>
					<li>3: ¡Salvaste una rana! 🐸 Es un paso más hacia la victoria.</li>
					<li>
						4: ¡Cuidado! Grogu avanza un paso en su carrera 🚀. ¡No dejes que te
						gane!
					</li>
				</ul>
				<p className="instructions__write-p">
					Tu misión es recoger todos los snacks antes de que Grogu llegue al
					final.
				</p>
				<p className="instructions__write-p">
					Si lo hace primero, ¡se comerá todo! 😭
				</p>
				<h3>
					💪🏽 ¿Estás listo para la aventura? ¡Lanza el dado y que comience la
					competición!
				</h3>
			</div>
			<ul>
				<li className="footer__menu-item">
					<Link to="/Main" className="footer__menu-link active">
						¡A jugar!
					</Link>
					<Link to="/" className="footer__menu-link active">
						Página Principal
					</Link>
				</li>
			</ul>
		</section>
	);
}

export default Rules;
