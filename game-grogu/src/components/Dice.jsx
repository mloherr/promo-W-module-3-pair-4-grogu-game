function Dice({ onClick }) {
  const handleClickDice = () => {
    onClick();
  };
  return (
    <>
      <button className="dice" onClick={handleClickDice}>
        Lanzar Dado
      </button>
    </>
  );
}

export default Dice;
