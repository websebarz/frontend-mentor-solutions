import { useState } from "react";
import NavBar from "./comps/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
