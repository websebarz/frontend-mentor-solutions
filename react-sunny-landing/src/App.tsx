import { useState, useEffect } from "react";
import Header from "./comps/Header";
import ImageGrid from "./comps/ImageGrid";
import Testimonials from "./comps/Testimonials";
import Footer from "./comps/Footer";
import MobileNav from "./comps/MobileNav";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(true);
  const handleClose = () => setClicked(false);
  const breakpoint = 1024;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <>
      <MobileNav clicked={clicked} handleClose={handleClose} />
      <Header width={width} breakpoint={breakpoint} handleClick={handleClick} />
      <ImageGrid width={width} breakpoint={breakpoint} />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
