import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

export const QuizContext = createContext();

const initialeState = {
  questions,
  currentQuestionIndex: 0,
  showResult: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
};
const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        state.questions[state.currentQuestionIndex].correctAnswer ===
        action.payload
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }
    case "NEXT": {
      const showResult =
        state.questions.length - 1 === state.currentQuestionIndex;
      const currentQuestionIndex = showResult
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResult
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResult,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART":
      return initialeState;
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialeState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
