import getRandomElementFromArray from "../utils/randomElementFromArray";
import phrase from "../utils/phrases.json";

const ButtonPhrase = ({ setPhraseRandom, setPathRandom, arrBackground }) => {
  const handleRandomPhrase = () => {
    const newRandomPhrase = getRandomElementFromArray(phrase);
    setPhraseRandom(newRandomPhrase);
    const newRandomPath = getRandomElementFromArray(arrBackground);
    setPathRandom(newRandomPath);
  };

  return (
    <button onClick={handleRandomPhrase} className="app__btn">
      Ver otro
    </button>
  );
};
export default ButtonPhrase;
