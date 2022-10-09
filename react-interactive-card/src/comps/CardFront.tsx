import cardSvg from "/imgs/card-logo.svg";
import background from "/imgs/bg-card-front.png";
const CardFront = ({ name, cardNumber, month, year, cvc }) => {
  return (
    <div
      className="flex flex-col justify-between px-5 sm:px-8 py-5 sm:py-8 text-white rounded-lg w-full h-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={cardSvg} alt="" className="w-14 sm:w-20" />
      <div className="flex flex-col space-y-5">
        <div className="text-lg sm:text-3xl tracking-wider sm:tracking-wide">
          <div>
            <p className="">{cardNumber}</p>
          </div>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <p>{name && name.toUpperCase()}</p>
          {month !== "" || year !== "" ? (
            <p>
              {month} / {year}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CardFront;
