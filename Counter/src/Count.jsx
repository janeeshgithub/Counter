import { useState } from "react";
import jp from "./jp.jpg"; // Import the background image

function Count() {
  const [ct, setCount] = useState(1);

  const increment = () => {
    setCount(ct * 2);
  };

  const decrement = () => {
    setCount(ct / 2);
  };

  const reset = () => {
    setCount(1);
  };

  return (
    <div className="count-container" style={{
      backgroundImage: `url(${jp})`,
      backgroundPosition: "center",
      width: "100vw", // Set width to full viewport width
      height: "100vh", // Set height to full viewport height
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h2 className="count-display">{ct}</h2>
      <div>
        <button className="count-button" onClick={decrement}>Decrement</button>
        <button className="count-button" onClick={increment}>Increment</button>
        <button className="count-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Count;
