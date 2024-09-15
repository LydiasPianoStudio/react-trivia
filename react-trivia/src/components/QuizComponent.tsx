import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import ResultComponent from "./ResultComponent";

interface QuizComponentProps {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <div>
          <QuestionComponent
            question={questions[currentQuestionIndex].question}
            answers={questions[currentQuestionIndex].answers}
            correctAnswer={questions[currentQuestionIndex].correctAnswer}
            onAnswerSelect={handleAnswerSelect}
          />

          <div className="navigation-buttons">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestionIndex]}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz Finished!</h2>
          <p>
            You scored {score} out of {questions.length}.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
