import hamburgerSvg from "../assets/imgs/icon-hamburger.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-blue-dark p-4">
      <h2 className="text-white">THE PLANETS</h2>
      <img src={hamburgerSvg} alt="" />
    </div>
  );
};

export default NavBar;
