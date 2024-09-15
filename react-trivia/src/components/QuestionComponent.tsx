import React, { useState } from "react";

interface QuestionComponentProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  onAnswerSelect: (answer: string) => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  answers,
  correctAnswer,
  onAnswerSelect,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer); // Store selected answer
    onAnswerSelect(answer); // Trigger parent function
  };

  const answerLabels = ["A", "B", "C", "D"]; // Labels for the answers

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="answer-list">
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`answer-option ${
              selectedAnswer === answer ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(answer)}
          >
            <span className="answer-label">{answerLabels[index]}</span> {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
