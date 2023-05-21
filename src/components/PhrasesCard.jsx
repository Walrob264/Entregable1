import rectangle from "../../public/images/rectangle1.svg";
const rectangle1 = rectangle;
const PhrasesCard = ({ phraseRandom }) => {
  return (
    <div className="card">
      <img src={rectangle1} alt="rectangle" />
      <i class="bx bxs-quote-alt-right comillas"></i>
      <p className="card_text">{phraseRandom.phrase}</p>;
    </div>
  );
};
export default PhrasesCard;
