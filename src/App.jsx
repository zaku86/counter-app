import Count from "./components/Count";
import Actions from "./components/Actions";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="main-container">
      <div className="counter-div">
        <h1>Counter </h1>
        <Count count={count} />
        <Actions count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
