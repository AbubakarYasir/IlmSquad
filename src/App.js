import React from "react";
import "./App.css";
import { questions } from "./questions";
import { useState } from "react";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-div">
      {showScore ? (
        <section className="showScore-section">
          Your score is
          <span class="score"> {score} </span>
          out of
          <span class="questions-length"> {questions.length} </span>
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>Quiz</h1>
            <p class="question-number">
              Question {currentQuestion + 1}/{questions.length}
            </p>
            <p class="question-text">
              {questions[currentQuestion].questionText}
            </p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
