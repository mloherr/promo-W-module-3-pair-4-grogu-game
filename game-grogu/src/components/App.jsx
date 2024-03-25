import "../scss/App.scss";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import Rules from "./Rules.jsx";
import Game from "./Game.jsx";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  const [resultDice, setResultDice] = useState(null);
  const [stateGame, setStateGame] = useState("");
  const [name, setName] = useState("");

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    setResultDice(randomNumber);
    console.log(randomNumber);

    if (randomNumber === 1) {
      const newCookies = cookies.slice(1);
      setCookies(newCookies);
    }
    if (randomNumber === 2) {
      const newEggs = eggs.slice(1);
      setEggs(newEggs);
    }

    if (randomNumber === 3) {
      const newFrogs = frogs.slice(1);
      setFrogs(newFrogs);
    }
    if (randomNumber === 4) {
      setGroguPosition(groguPosition + 1);
    }
  };

  const restartGame = () => {
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);
    setFrogs(["🐸", "🐸", "🐸"]);
    setGroguPosition(0);
  };

  const nameInputUser = (value) => {
    setName(value);
  };

  useEffect(() => {
    if (eggs.length === 0 && cookies.length === 0 && frogs.length === 0) {
      setStateGame("Ganaste, Mando completa la misión");
    } else if (groguPosition === 6) {
      setStateGame("¡¡Grogu se ha comido el cargamento!! Has perdido");
    } else {
      setStateGame("En curso");
    }
  }, [eggs, frogs, cookies, groguPosition]);

  return (
    <>
      <Header title="Cuidado con Grogu" />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              groguPosition={groguPosition}
              rollDice={rollDice}
              nameInputUser={nameInputUser}
              cookies={cookies}
              name={name}
              eggs={eggs}
              frogs={frogs}
              stateGame={stateGame}
              restartGame={restartGame}
            />
          }
        />
        <Route path="/instructions" element={<Rules />} />
        <Route path="/options" element={<Game />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
