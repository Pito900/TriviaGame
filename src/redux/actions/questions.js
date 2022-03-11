import {
  GET_QUESTIONS,
} from './actionTypes';

export const questions = (results) => ({
  type: GET_QUESTIONS,
  results,
});

export default questions;
