import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import ResultComponent from "./ResultComponent"; // Import the ResultComponent

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}
//rendering list of questions and answers
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
    {
      question: "Which of the following was a member of The Beatles?",
      answers: [
        "Mick Jagger",
        "Paul McCartney",
        "Freddie Mercury",
        "Bob Dylan",
      ],
      correctAnswer: "Paul McCartney",
    },
    {
      question: "What genre of music did Louis Armstrong help pioneer?",
      answers: ["Rock", "Jazz", "Classical", "Blues"],
      correctAnswer: "Jazz",
    },
    {
      question: "In which year did Elvis Presley release 'Heartbreak Hotel'?",
      answers: ["1956", "1962", "1965", "1950"],
      correctAnswer: "1956",
    },
    {
      question: "Who was the lead singer of Queen?",
      answers: ["David Bowie", "Freddie Mercury", "Axl Rose", "Robert Plant"],
      correctAnswer: "Freddie Mercury",
    },
    {
      question: "Which classical composer became deaf in his later years?",
      answers: ["Beethoven", "Chopin", "Tchaikovsky", "Brahms"],
      correctAnswer: "Beethoven",
    },
    {
      question: "Which album is known as the best-selling album of all time?",
      answers: [
        "Thriller",
        "Back in Black",
        "The Dark Side of the Moon",
        "Abbey Road",
      ],
      correctAnswer: "Thriller",
    },
    {
      question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
      answers: ["The Rolling Stones", "The Beatles", "Queen", "Led Zeppelin"],
      correctAnswer: "Queen",
    },
    {
      question: "Which American singer is known as the 'Queen of Soul'?",
      answers: [
        "Whitney Houston",
        "Aretha Franklin",
        "Mariah Carey",
        "Diana Ross",
      ],
      correctAnswer: "Aretha Franklin",
    },
    {
      question: "Which rock band was formed by Jimmy Page in 1968?",
      answers: ["The Who", "Pink Floyd", "Led Zeppelin", "The Rolling Stones"],
      correctAnswer: "Led Zeppelin",
    },
    {
      question: "Who is credited with creating the concept of 'ballet music'?",
      answers: ["Tchaikovsky", "Stravinsky", "Debussy", "Vivaldi"],
      correctAnswer: "Tchaikovsky",
    },
    {
      question: "What genre is Johnny Cash best known for?",
      answers: ["Country", "Blues", "Rock", "Jazz"],
      correctAnswer: "Country",
    },
    {
      question: "Which famous composer wrote the opera 'The Magic Flute'?",
      answers: ["Beethoven", "Wagner", "Bach", "Mozart"],
      correctAnswer: "Mozart",
    },
    {
      question: "Who was known as the frontman of the rock band Nirvana?",
      answers: ["Kurt Cobain", "Dave Grohl", "Chris Cornell", "Eddie Vedder"],
      correctAnswer: "Kurt Cobain",
    },
    {
      question: "Which artist released the album 'Purple Rain'?",
      answers: ["Prince", "Michael Jackson", "Stevie Wonder", "David Bowie"],
      correctAnswer: "Prince",
    },
    {
      question: "Which composer wrote the famous 'Symphony No. 9'?",
      answers: ["Beethoven", "Brahms", "Haydn", "Schubert"],
      correctAnswer: "Beethoven",
    },
    {
      question: "What is the title of The Beatles' final studio album?",
      answers: [
        "Abbey Road",
        "Revolver",
        "Sgt. Pepper's Lonely Hearts Club Band",
        "Let It Be",
      ],
      correctAnswer: "Let It Be",
    },
    {
      question: "Who is known for the song 'Imagine'?",
      answers: [
        "John Lennon",
        "Paul McCartney",
        "George Harrison",
        "Ringo Starr",
      ],
      correctAnswer: "John Lennon",
    },
    {
      question: "Which artist is known for pioneering the 'Motown Sound'?",
      answers: [
        "Stevie Wonder",
        "Marvin Gaye",
        "Smokey Robinson",
        "Berry Gordy",
      ],
      correctAnswer: "Berry Gordy",
    },
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
