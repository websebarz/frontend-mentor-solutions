function Card() {
  return (
    <section className="relative w-screen h-[240px]">
      <img
        src="imgs/bg-card-back.png"
        alt="user card back"
        className="absolute w-[286px] h-[157px] left-[73px] top-[32px]"
      />
      <img
        src="imgs/bg-card-front.png"
        alt="user card front"
        className="absolute w-[286px] h-[157px] left-[16px] top-[126px]"
      />
      <svg
        width="84"
        height="47"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[22px] top-[144px]"
      >
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff"
        />
      </svg>
      <span className="absolute top-[211px] left-[35px] text-lg tracking-widest font-['Space_Grotesk']">
        0000 0000 0000 0000
      </span>

      <span className="absolute top-[251px] left-[35px] font-['Space_Grotesk'] text-[9px] tracking-widest">
        JANE APPLESEED
      </span>
      <span className="absolute top-[251px] left-[243px] font-['Space_Grotesk'] text-[9px] tracking-widest">
        00/00
      </span>
      <span className="absolute top-[102px] left-[301px] text-[9px] font-['Space_Grotesk'] tracking-widest">
        000
      </span>
    </section>
  );
}

export default Card;
