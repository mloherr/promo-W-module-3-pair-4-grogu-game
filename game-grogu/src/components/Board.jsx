import Grogu from "./Grogu";

function Board({ groguPosition }) {
	const renderCells = () => {
		const cells = Array(7).fill(null);
		return cells.map((cell, index) => {
			if (index === groguPosition) {
				return (
					<div key={index} className="cell">
						<Grogu />
					</div>
				);
			} else {
				return <div key={index} className="cell"></div>;
			}
		});
	};

	return <section className="board">{renderCells()}</section>;
}

export default Board;
