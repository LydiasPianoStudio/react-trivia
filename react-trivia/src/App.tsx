import React, { useState } from "react";
import StartButton from "./components/StartButton";
import QuizComponent from "./components/QuizComponent";

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
  };

  return (
    <div className="container">
      {!quizStarted ? (
        <>
          <h1>Welcome to the Music History Quiz</h1>
          <p>Click the button below to start the quiz!</p>
          <StartButton onStart={handleStart} />
        </>
      ) : (
        <QuizComponent />
      )}
    </div>
  );
};

export default App;
