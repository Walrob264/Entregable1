import { useState } from "react";
import "./App.css";
import ButtonPhrase from "./components/ButtonPhrase";
import PhrasesCard from "./components/PhrasesCard";
import phrasesList from "./utils/phrases.json";
import getRandomElementFromArray from "./utils/randomElementFromArray";

const arrBackground = [1, 2, 3, 4];
function App() {
  const initialPhrase = getRandomElementFromArray(phrasesList);
  const initialPath = getRandomElementFromArray(arrBackground);
  const [phraseRandom, setPhraseRandom] = useState(initialPhrase);
  const [pathRandom, setPathRandom] = useState(initialPath);

  const objStyle = {
    backgroundImage: `url("/images/fondo${pathRandom}.png")`,
  };
  return (
    <>
      <div style={objStyle} className="app">
        <div className="app__title">
          <h1>GALLETAS DE LA FORTUNA</h1>
        </div>
        <PhrasesCard phraseRandom={phraseRandom} />
        <ButtonPhrase
          setPhraseRandom={setPhraseRandom}
          setPathRandom={setPathRandom}
          arrBackground={arrBackground}
        />
      </div>
    </>
  );
}

export default App;
