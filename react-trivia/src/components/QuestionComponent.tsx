import React from "react";

interface QuestionProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  answers,
  correctAnswer,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul className="list-group">
        {answers.map((answer, index) => (
          <li
            key={index}
            className={`list-group-item ${
              selectedAnswer === answer ? "active" : ""
            }`}
            onClick={() => onAnswerSelect(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
