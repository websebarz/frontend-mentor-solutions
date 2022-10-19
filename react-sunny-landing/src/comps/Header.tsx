import logo from "../assets/images/logo.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";
import arrowIcon from "../assets/images/icon-arrow-down.svg";

const Header = ({ width, breakpoint, handleClick }) => {
  return (
    <>
      {width >= breakpoint ? (
        <header className="bg-[url('./assets/images/desktop/image-header.jpg')] bg-cover bg-center h-[538px] text-center">
          <div className="flex justify-between p-4 mb-8">
            <img src={logo} alt="sunnyside logo" />
            <div className="flex justify-bewtween w-[30%]">
              <div className="flex justify-between text-white w-[100%]">
                <a href="" className="hover:underline">
                  About
                </a>
                <a href="" className="hover:underline">
                  Services
                </a>
                <a href="" className="hover:underline">
                  Projects
                </a>
              </div>
              <span className="cursor-pointer uppercase font-serif font-bold bg-white rounded-lg ml-8 text-[15px] tracking-[-0.11px] w-[140px] pt-[0.125em] pb-[0.125em]">
                contact
              </span>
            </div>
          </div>
          <span className="text-[40px] uppercase font-black tracking-[6.25px] font-serif text-white">
            we are creatives
          </span>
          <img
            src={arrowIcon}
            alt="arrow down icon"
            className="ml-auto mr-auto"
          />
        </header>
      ) : (
        <header className="bg-[url('./assets/images/mobile/image-header.jpg')] bg-cover bg-center h-[538px] text-center">
          <div className="flex justify-between p-4 mb-8">
            <img src={logo} alt="sunnyside logo" />
            <img
              src={hamburgerIcon}
              alt="hamburger icon"
              className="cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <span className="text-[40px] uppercase font-black tracking-[6.25px] font-serif text-white">
            we are creatives
          </span>
          <img
            src={arrowIcon}
            alt="arrow down icon"
            className="ml-auto mr-auto"
          />
        </header>
      )}
    </>
  );
};

export default Header;
