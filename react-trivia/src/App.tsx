import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0)
  function handleClick(): void {
    console.log("The game has started!");
  }

  return (
    <>
      <h1>Welcome to Music Trivia</h1>
      <p>
        Instructions: There are 20 Questions! Select Your Answer and Click
        "Next"
      </p>
      <button onClick={handleClick}>Start The Game</button>
    </>
  );
}

export default App;

// <div>

//   <button onClick={() => setCount((count) => count + 1)}>
//     count is {count}
//   </button>

// </div>
