import React from "react";

function Answer({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctClass} ${wrongClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className='answer-letter'>{letterMapping[index]}</div>
      <div className='answer-text'>{answerText}</div>
    </div>
  );
}

export default Answer;
