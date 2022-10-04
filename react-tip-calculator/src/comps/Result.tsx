import { useFormContext } from "react-hook-form";

function Result() {
  const { reset, watch } = useFormContext();

  // Parsing values
  const billParsed = parseFloat(watch("theBill"));
  const discountParsed = parseFloat(watch("customTip"));
  const numberOfPeopleParsed = parseFloat(watch("numOfPeople"));
  // Operations
  const tipAmountPerPerson = Number(
    ((billParsed * (discountParsed / 100)) / numberOfPeopleParsed).toFixed(2)
  );
  const totalPerPerson = Number(
    (
      (billParsed + (billParsed * discountParsed) / 100) /
      numberOfPeopleParsed
    ).toFixed(2)
  );

  return (
    <div className="result-container--el">
      <div className="tip-result--el">
        <div className="divider--el">
          <span className="text-result--el">Tip Amount</span>
          <br />
          <span className="text-person--el">/ person</span>
        </div>
        <div className="tip-result-amount">
          <span className="result--el">{`$${
            isNaN(tipAmountPerPerson) ? "0.00" : tipAmountPerPerson
          }`}</span>
        </div>
      </div>
      <div className="tip-result--el">
        <div className="divider--el">
          <span className="text-result--el">Total</span>
          <br />
          <span className="text-person--el">/ person</span>
        </div>
        <div className="tip-result-amount">
          <span className="result--el">{`$${
            isNaN(totalPerPerson) ? "0.00" : totalPerPerson
          }`}</span>
        </div>
      </div>
      <button
        className="btn--el"
        onClick={() => reset({ theBill: "", customTip: "", numOfPeople: "" })}
      >
        RESET
      </button>
    </div>
  );
}

export default Result;
