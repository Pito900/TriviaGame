import {
  GET_QUESTIONS,
} from './actionTypes';

export const questionsAc = (results) => ({
  type: GET_QUESTIONS,
  results,
});

export default questionsAc;
