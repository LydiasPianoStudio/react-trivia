import React from "react";

interface ResultProps {
  score: number;
  totalQuestions: number;
}

const ResultComponent: React.FC<ResultProps> = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
      <p>Great job! Try again to improve your score.</p>
    </div>
  );
};

export default ResultComponent;
