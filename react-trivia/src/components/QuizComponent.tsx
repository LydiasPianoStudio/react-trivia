import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import ResultComponent from "./ResultComponent"; // Import the ResultComponent

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const QuizComponent: React.FC = () => {
  const questions: Question[] = [
    {
      question: "Who composed 'The Four Seasons'?",
      answers: ["Bach", "Beethoven", "Vivaldi", "Mozart"],
      correctAnswer: "Vivaldi",
    },
    {
      question: "Who is known as the King of Pop?",
      answers: ["Prince", "Michael Jackson", "Elvis Presley", "David Bowie"],
      correctAnswer: "Michael Jackson",
    },
    // Add more questions here...
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true); // Quiz is finished
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      {quizFinished ? (
        // Render the ResultComponent when the quiz is finished
        <ResultComponent score={score} totalQuestions={questions.length} />
      ) : (
        <div>
          <QuestionComponent
            question={questions[currentQuestionIndex].question}
            answers={questions[currentQuestionIndex].answers}
            correctAnswer={questions[currentQuestionIndex].correctAnswer}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
          />

          <div className="mt-3">
            <button
              className="btn btn-secondary"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
