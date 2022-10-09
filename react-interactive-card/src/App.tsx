import { useState } from "react";
import Card from "./comps/Card";
import CardForm from "./comps/CardForm";
import RegComplete from "./comps/RegComplete";

const initialState = {
  name: "JANE APPLESEED",
  cardNumber: "0000 0000 0000 0000",
  month: "00",
  year: "00",
  cvc: "***",
  isRegComplete: false,
};

function App() {
  const [card, setCard] = useState(initialState);
  const updateCard = (card: any) => setCard({ ...card });
  const resetCard = () => setCard(initialState);
  const regComplete = () => {
    card.isRegComplete = true;
    setCard({ ...card });
  };
  return (
    <div className="flex flex-col sm:flex-row sm:h-screen">
      <Card
        name={card.name}
        cardNumber={card.cardNumber}
        month={card.month}
        year={card.year}
        cvc={card.cvc}
      />
      {!card.isRegComplete ? (
        <CardForm onInputChange={updateCard} onSubmit={regComplete} />
      ) : (
        <RegComplete onComplete={resetCard} />
      )}
    </div>
  );
}

export default App;
