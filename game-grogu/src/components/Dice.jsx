function Dice({ onClick }) {
	const handleClickDice = () => {
		onClick();
	};
	return (
		<>
			<button className="dice" onClick={handleClickDice}>
				¡Lanzar dado!
			</button>
		</>
	);
}

export default Dice;
