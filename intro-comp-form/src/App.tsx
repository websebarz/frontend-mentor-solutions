import { useState } from "react";
import Form from "./comps/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-red lg:grid lg:grid-cols-2 lg:content-center">
      <section className="flex flex-col text-center p-4 mb-32">
        <div className="mt-[5.5em]">
          <h2 className="font-sans text-[1.75em] text-white font-bold leading-[1.125] lg:text-[3.125em]">
            Learn to code by watching others
          </h2>
          <p className="font-sans mt-4 text-white leading-6 font-normal">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
      </section>
      <Form />
    </div>
  );
}

export default App;
