
import Grogu from './Grogu.jsx';

function Board({ groguPosition }) {
  const cells = Array.from({ length: 7 }).map((_, index) => (
    <div className="cell" key={index}>
      {index === groguPosition ? <Grogu /> : null}
    </div>
  ));

  return <section className="board">{cells}</section>;
}

export default Board;
