import CardFront from "./CardFront";
import cardBack from "/imgs/bg-card-back.png";

const Card = ({ cvc, ...rest }) => {
  return (
    <div className=" sm:w-[400px] bg-very-dark-violet w-full h-[250px] sm:h-auto pt-10 sm:pt-52 sm:pl-28">
      <div className="relative w-80 sm:w-[500px] h-[250px] sm:h-[490px] mx-auto ">
        <img
          src={cardBack}
          alt=""
          className="absolute right-0 sm:bottom-0 w-10/12 sm:w-10/12 h-[159px] sm:h-56"
        />
        <p className="text-white text-xs sm:text-sm absolute right-7 sm:right-12 top-[69px] sm:top-[368px]">
          {cvc}
        </p>
        <div className="absolute left-0 bottom-0 sm:top-0 h-[159px] sm:h-56 w-10/12 sm:w-10/12">
          <CardFront {...rest} />
        </div>
      </div>
    </div>
  );
};

export default Card;
