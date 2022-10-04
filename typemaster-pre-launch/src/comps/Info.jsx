function Info() {
  let width = window.innerWidth;
  return (
    <>
      {width <= 1280 ? (
        <div className="flex flex-col items-center text-center mt-[2em] md:p-[1em]">
          <div className="flex md:grid md:grid-rows-3 md:grid-cols-3 flex-col items-center leading-none">
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
      <div className="md:grid md:grid-cols-2 xl:grid-cols-8">
        <div className="mt-[6em] md:text-start xl:col-span-2">
          <span>
            <svg
              className="inline-block md:block bg-orange rounded-lg"
              width="65"
              height="65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.673 17.755l2.253 2.939H7.51l2.253-2.939h5.91zM23.183.45a1.96 1.96 0 011.96 1.96v12.08a1.96 1.96 0 01-1.96 1.96H1.96A1.96 1.96 0 010 14.489V2.41A1.96 1.96 0 011.96.448z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
          </span>
          <div>
            <h3 className="mt-[2em] text-[1.5em] font-black font-['Barlow']">
              HIGHLY
              <br /> COMPATIBLE
            </h3>
            <p className="mt-[2em] text-silver leading-normal md:justify-self-start">
              Easy to use and works well with all major computer brands, gaming
              consoles and mobile devices. Plug & play, no installation or
              driver needed.
            </p>
          </div>
        </div>
        <div className="mt-[6em] md:text-start xl:col-start-3 xl:col-span-2">
          <span>
            <svg
              className="inline-block md:block bg-orange rounded-lg"
              width="65"
              height="65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.947 13.93l5.974-5.999a1.653 1.653 0 00-.25-2.537L10.076.282a1.663 1.663 0 00-2.592 1.37v7.942L3.533 5.6a1.641 1.641 0 00-2.326-.01 1.652 1.652 0 00-.01 2.336l5.953 6.002-5.953 6.002a1.653 1.653 0 00.01 2.338 1.64 1.64 0 002.326-.01l3.95-3.994v7.941c0 .61.348 1.172.887 1.459a1.659 1.659 0 001.705-.09l7.596-5.11a1.655 1.655 0 00.25-2.538l-5.974-5.996zm-1.111-9.173l3.358 2.26-3.358 3.372V4.757zm0 18.348v-5.632l3.358 3.372-3.358 2.26z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
          </span>

          <div>
            <h3 className="mt-[2em] text-[1.5em] font-black font-['Barlow']">
              WIRELESS
              <br /> WITH BLUETOOTH
            </h3>
            <p className="mt-[2em] text-silver leading-normal">
              Powerful 2.4G RF technology allows you to connect the cordless
              keyboard from up to 30ft away. Simply plug the unifying receiver
              into your computer.
            </p>
          </div>
        </div>
        <div className="mt-[6em] md:text-start xl:col-start-5 xl:col-span-2">
          <span>
            <svg
              className="inline-block md:block bg-orange rounded-lg"
              width="65"
              height="65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.655 4.333h-.322V4A3.67 3.67 0 0025.667.333h-22A3.67 3.67 0 000 4v12.667a3.67 3.67 0 003.667 3.666h22a3.67 3.67 0 003.666-3.666v-.334h.322A2.336 2.336 0 0031.988 14V6.667a2.336 2.336 0 00-2.333-2.334zm-20.322 11a1 1 0 01-1 1H5a1 1 0 01-1-1v-10a1 1 0 011-1h3.333a1 1 0 011 1v10zm8 0a1 1 0 01-1 1H13a1 1 0 01-1-1v-10a1 1 0 011-1h3.333a1 1 0 011 1v10zm8 0a1 1 0 01-1 1H21a1 1 0 01-1-1v-10a1 1 0 011-1h3.333a1 1 0 011 1v10z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
          </span>

          <div>
            <h3 className="mt-[2em] text-[1.5em] font-black font-['Barlow']">
              HIGH CAPACITY
              <br /> BATTERY
            </h3>
            <p className="mt-[2em] text-silver leading-normal">
              Equipped with a long-lasting built-in battery, you’ll never have
              to spend a dime on replaceable ones. Enjoy 40 hours of usage time
              between charges.
            </p>
          </div>
        </div>
        <div className="mt-[6em] md:text-start xl:col-start-7 xl:col-span-2">
          <span>
            <svg
              className="inline-block md:block bg-orange rounded-lg"
              width="65"
              height="65"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 28v1.667A2.345 2.345 0 0117.667 32h-3.334C13.213 32 12 31.147 12 29.28V28h8zm5.47-3.947l1.845 1.846a1 1 0 11-1.415 1.414l-1.845-1.845a1 1 0 111.414-1.415zm-17.523 0a1 1 0 010 1.415L6.1 27.313a.997.997 0 01-1.414 0 1 1 0 010-1.414l1.845-1.846a1 1 0 011.415 0zM14 6.88c2.813-.6 5.693.093 7.88 1.867A9.297 9.297 0 0125.333 16c0 2.88-1.306 5.547-3.56 7.333-.92.72-1.52 1.654-1.706 2.667v.013C20.04 26 20.027 26 20 26h-8l-.047.002-.046.011V26c-.187-1.053-.734-1.96-1.52-2.547-2.907-2.2-4.267-5.8-3.52-9.426.733-3.534 3.6-6.414 7.133-7.147zM31 15a1 1 0 010 2h-2.61a1 1 0 010-2H31zM3.61 15a1 1 0 010 2H1a1 1 0 010-2h2.61zm12.723-5c-.546 0-1 .453-1 1 0 .547.454 1 1 1A3.665 3.665 0 0120 15.667c0 .546.453 1 1 1 .547 0 1-.454 1-1A5.679 5.679 0 0016.333 10zm10.982-5.315a1 1 0 010 1.415l-1.846 1.845a1.003 1.003 0 01-1.414 0 1 1 0 010-1.414L25.9 4.685a1 1 0 011.415 0zm-21.214 0l1.846 1.846a1 1 0 11-1.415 1.414L4.687 6.1A1 1 0 116.1 4.685zM16 0a1 1 0 011 1v2.61a1 1 0 01-2 0V1a1 1 0 011-1z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
          </span>

          <div>
            <h3 className="mt-[2em] text-[1.5em] font-black font-['Barlow']">
              RGB BACKLIT
              <br /> MODES
            </h3>
            <p className="mt-[2em] text-silver leading-normal">
              Choose from 4 backlight brightness levels and adjustable breathing
              speed. Each key glows intensely in the dark and helps you type in
              low light conditions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
