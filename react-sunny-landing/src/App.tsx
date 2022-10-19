import { useState, useEffect } from "react";
import Header from "./comps/Header";
import ImageGrid from "./comps/ImageGrid";
import Testimonials from "./comps/Testimonials";
import Footer from "./comps/Footer";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  // console.log(width);
  const breakpoint = 1024;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div>
      <Header width={width} breakpoint={breakpoint} />
      <ImageGrid width={width} breakpoint={breakpoint} />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
