import { useFormContext } from "react-hook-form";

function Card() {
  const { watch } = useFormContext();
  const userName = watch("theName");
  const cardNumber = watch("cardNumber");
  const monthEl = watch("theMonth");
  const yearEl = watch("theYear");
  const verEl = watch("verCode");
  return (
    <section className="relative w-screen lg:w-[35%] h-[240px] lg:h-screen">
      <img
        src="imgs/bg-card-back.png"
        alt="user card back"
        className="absolute w-[286px] h-[157px] left-[73px] top-[32px] lg:top-[369px] lg:left-[168px]"
      />
      <img
        src="imgs/bg-card-front.png"
        alt="user card front"
        className="absolute w-[286px] h-[157px] left-[16px] lg:left-[124px] top-[126px] lg:top-[187px]"
      />
      <svg
        width="84"
        height="47"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[22px] lg:left-[124px] top-[144px] lg:top-[204px]"
      >
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff"
        />
      </svg>
      <span className="absolute top-[211px] lg:top-[270px] left-[35px] lg:left-[140px] text-lg tracking-widest font-['Space_Grotesk']">
        {cardNumber
          ? cardNumber
              .replace(/\s|[^0-9]+/g, "")
              .match(/.{1,4}/g)
              ?.join(" ") ?? ""
          : "0000 0000 0000 0000"}
      </span>

      <span className="absolute top-[251px] lg:top-[311px] left-[35px] lg:left-[140px] font-['Space_Grotesk'] text-[9px] tracking-widest">
        {userName ? userName : "Jane Appleseed"}
      </span>
      <span className="absolute top-[251px] lg:top-[311px] left-[243px] lg:left-[353px] font-['Space_Grotesk'] text-[9px] tracking-widest">
        {monthEl & yearEl ? `${monthEl}/${yearEl}` : "00/00"}
      </span>
      <span className="absolute top-[102px] lg:top-[438px] left-[301px] lg:left-[400px] text-[9px] font-['Space_Grotesk'] tracking-widest">
        {verEl ? verEl : "000"}
      </span>
    </section>
  );
}

export default Card;
