import React, { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import "../App.css";
import Question from "./Question";

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  // action next question
  const handleClick = () => {
    dispatch({ type: "NEXT" });
  };
  // action restart quiz
  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <div className='quiz'>
      {quizState.showResult && (
        <div className='results'>
          <div className='congratulations'>Congratulations!</div>
          <div className='results-info'>
            <div>You have complited the quiz.</div>
            <div>
              You've got {quizState.correctAnswerCount} of{" "}
              {quizState.questions.length} rigth.
            </div>
            <div className='next-button' onClick={handleRestart}>
              Restart
            </div>
          </div>
        </div>
      )}
      {!quizState.showResult && (
        <div>
          <div className='score'>
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div className='next-button' onClick={handleClick}>
            Next Question
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
