import logo from "../assets/images/logo.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";
import arrowIcon from "../assets/images/icon-arrow-down.svg";

const Header = ({ width, breakpoint }) => {
  return (
    <>
      {width >= breakpoint ? (
        <header className="bg-[url('./assets/images/desktop/image-header.jpg')] bg-cover bg-center h-[538px] text-center">
          <div className="flex justify-between p-4 mb-8">
            <img src={logo} alt="sunnyside logo" />
            <img src={hamburgerIcon} alt="hamburger icon" />
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
            <img src={hamburgerIcon} alt="hamburger icon" />
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
