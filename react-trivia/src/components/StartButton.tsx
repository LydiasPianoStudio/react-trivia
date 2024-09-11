import React from "react";

interface StartButtonProps {
  onStart: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStart }) => {
  return (
    <button className="btn btn-primary" onClick={onStart}>
      Start Quiz
    </button>
  );
};

export default StartButton;
