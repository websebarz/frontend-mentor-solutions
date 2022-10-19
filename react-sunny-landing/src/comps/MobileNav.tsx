const XmarkIcon = (props: any) => {
  return (
    <svg
      fill={props.fill}
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
    </svg>
  );
};

const MobileNav = ({ clicked, handleClose }) => {
  return (
    <>
      {clicked && (
        <nav className="relative translate-y-0 h-[100vh] bg-blue-400 flex flex-col text-center text-white">
          <div
            onClick={handleClose}
            className="absolute top-5 right-10 w-[30px] ml-auto mr-auto"
          >
            <XmarkIcon fill="#fff" />
          </div>
          <ul className="mt-32">
            <li>
              <a href="#about" className="text-[32px]" onClick={handleClose}>
                About
              </a>
            </li>
            <li>
              <a href="#clients" className="text-[32px]" onClick={handleClose}>
                Testimonials
              </a>
            </li>

            <li>
              <a href="#contact" className="text-[32px]" onClick={handleClose}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
