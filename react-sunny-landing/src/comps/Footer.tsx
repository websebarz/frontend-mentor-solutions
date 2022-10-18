import galleryCone from "../assets/images/mobile/image-gallery-cone.jpg";
import galleryMilk from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import galleryOrange from "../assets/images/mobile/image-gallery-orange.jpg";
import gallerySugar from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import logo from "../assets/images/logo.svg";
import faceLogo from "../assets/images/icon-facebook.svg";
import igLogo from "../assets/images/icon-instagram.svg";
import pinLogo from "../assets/images/icon-pinterest.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 grid-rows-auto">
        <img
          src={galleryMilk}
          alt="milk bottles with blue background"
          className="w-[100%] h-[100%]"
        />
        <img
          src={galleryOrange}
          alt="oranges on a plate with orange background"
          className="w-[100%] h-[100%]"
        />
        <img
          src={galleryCone}
          alt="ice cream cones with blue background"
          className="w-[100%] h-[100%]"
        />
        <img
          src={gallerySugar}
          alt="sugar cubes with pink background"
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="bg-[#90D4C6] h-[350px]">
        <div className="flex flex-col w-[80%] ml-auto mr-auto">
          <img
            src={logo}
            alt="sunnyside logo"
            className="mt-16 mb-8 fill-current w-[170px] self-center"
          />
          <div className="flex justify-between text-[#2C7566] mb-16">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
          </div>
        </div>
        <div className="flex justify-around w-[164px] ml-auto mr-auto">
          <img src={faceLogo} alt="facebook logo" className="w-[20px]" />
          <img src={igLogo} alt="instagram logo" className="w-[20px]" />
          <img src={twitterLogo} alt="twitter logo" className="w-[20px]" />
          <img src={pinLogo} alt="pinterest logo" className="w-[20px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
