import React, { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  // action select answer
  const onSelectAnswer = text => {
    dispatch({ type: "SELECT_ANSWER", payload: text });
  };
  return (
    <div>
      <div className='question'>{currentQuestion.question}</div>
      <div className='answers'>
        {quizState.answers.map((answer, i) => (
          <Answer
            key={i}
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            index={i}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
