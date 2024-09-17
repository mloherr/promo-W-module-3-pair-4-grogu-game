import { Link } from "react-router-dom";

function Rules() {
	return (
		<section className="instructions">
			<div className="instructions__write">
				<p>👋 ¡Hola, aventurero!</p>
				<p>
					Estás en una emocionante carrera contra Grogu, el adorable ser de la
					galaxia (o eso pensamos nosotros). En este juego, tu objetivo es
					recoger tantos bienes valiosos como sea posible antes de que Grogu
					avance por el camino. Qué puedes encontrar por el camino? Galletas 🍪,
					huevos 🥚, ¡y ranas 🐸!
				</p>
				<h2>🎲 Cómo se juega</h2>
				<p>
					Para jugar, simplemente tira el dado pulsando el botón «¡Tira el
					dado!» y mira qué número obtienes.
				</p>
				<p>
					Si sacas un 1, habrás encontrado una deliciosa galleta 🍪 y la
					añadirás a tu colección. ¡Sigue adelante para guardar la mercancía!
				</p>
				<p>
					Si sacas un 2, descubres un valioso huevo 🥚 y lo guardas para más
					tarde. ¡Recoge todos los que puedas para ganar la carrera!
				</p>
				<p>
					Si sacas un 3, salvas una simpática rana 🐸 y la incluyes en tus
					preciados tesoros. ¡Cada rana te acerca un paso más a la victoria!
				</p>
				<p>
					Pero si sacas un 4, ¡Grogu avanza un espacio en su emocionante viaje!
					🚀
				</p>
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
