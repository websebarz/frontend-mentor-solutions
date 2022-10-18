import { useState } from "react";
import Header from "./comps/Header";
import ImageGrid from "./comps/ImageGrid";
import Testimonials from "./comps/Testimonials";
import Footer from "./comps/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <ImageGrid />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
