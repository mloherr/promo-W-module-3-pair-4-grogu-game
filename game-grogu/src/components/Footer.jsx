import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="footer">
			<nav>
				<ul>
					<li className="footer__menu-item">
						<Link to="/Main" className="footer__menu-link">
							¡A jugar!
						</Link>
						<Link to="/instructions" className="footer__menu-link">
							Instrucciones
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
