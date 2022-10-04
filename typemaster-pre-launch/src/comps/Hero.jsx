import Info from "./Info";

function Hero() {
  let width = window.innerWidth;
  return (
    <div className="p-[1em] md:p-[2em] xl:p-[4em] xl:w-screen">
      <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-[1em] xl:w-[100%] ">
        <div className="flex flex-col col-span-3 md:col-span-2 xl:col-start-2 xl:col-span-2">
          <div>
            <span className="text-5xl font-black font-['Barlow']">
              TYPEMASTER
            </span>
            <br />
            <span className="text-5xl font-black font-['Barlow']">
              KEYBOARD
            </span>
          </div>
          <p className="mt-[2em] text-silver">
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </p>
          <div className="flex mt-[2em]">
            <button className="w-[50%] h-[48px] bg-orange hover:bg-peach text-white rounded-lg p-[0.5em] font-bold">
              PRE-ORDER NOW
            </button>
            <button className="w-[50%] h-[48px] bg-light-silver text-silver rounded-lg p-[0.5em] font-bold">
              RELEASE ON 5/27
            </button>
          </div>
        </div>
        <img
          src="imgs/mobile/image-keyboard.jpg"
          alt="typemaster keyboard"
          className="mt-[2em] rounded-lg row-start-2 col-span-3 translate-x-6 md:row-start-1 md:col-start-3 h-full -translate-y-8 object-cover xl:w-[540px] xl:h-[480px] xl:col-start-4"
        />
        {width >= 1280 ? (
          <span className="xl:col-start-6 xl:translate-x-64 xl:row-start-1">
            <svg width="255" height="240" xmlns="http://www.w3.org/2000/svg">
              <rect
                width="255"
                height="240"
                rx="20"
                fill="#E8EFF2"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        ) : (
          <span></span>
        )}
        <img
          src="imgs/mobile/image-phone-and-keyboard.jpg"
          alt="typermaster keyboard and mobile phone"
          className="h-[193px] md:object-cover md:h-full -left-9 rounded-lg row-start-3 -translate-x-6 md:translate-x-0 md:row-start-2 bg-orange bg-blend-difference xl:col-start-2 xl:w-[255px] xl:h-[480px]"
        />
        <img
          src="imgs/mobile/image-glass-and-keyboard.jpg"
          alt=""
          className="h-[193px] md:h-full rounded-lg row-start-3 col-span-2 md:row-start-2 col-start-2 col-span-3 md:translate-x-12 xl:col-start-3 xl:col-span-3 xl:w-[445px] xl:h-[480px]"
        />
        {width >= 1280 ? (
          <span className="xl:row-start-2 xl:col-start-1 xl:-translate-x-36 xl:translate-y-60">
            <svg width="255" height="240" xmlns="http://www.w3.org/2000/svg">
              <rect
                width="255"
                height="240"
                rx="20"
                fill="#E8EFF2"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        ) : (
          <span></span>
        )}
        {width >= 1280 ? (
          <div className="flex flex-col items-center text-center mt-[2em] md:p-[1em] xl:col-start-6 xl:col-span-2 xl:text-start">
            <div className="flex md:grid md:grid-rows-3 md:grid-cols-3 xl:flex flex-col items-center leading-none xl:items-start">
              <span className="text-[2em] font-black font-['Barlow'] md:justify-self-start">
                MECHANICAL
              </span>
              <br />
              <span className="text-[2em] font-black font-['Barlow'] md:row-start-2 md:justify-self-start">
                WIRELESS
              </span>
              <br />
              <span className="text-[2em] font-black font-['Barlow'] md:row-start-3 md:justify-self-start">
                KEYBOARD
              </span>
              <p className="mt-[2em] text-silver leading-normal md:row-start-1 md:col-start-2 md:row-span-3 md:col-span-2">
                The Typemaster keyboard boasts top-notch build and practical
                design. It offers a wide variety of switches and keycaps, along
                with reliable wireless connectivity.
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Info />
    </div>
  );
}

export default Hero;
