import {
  GET_PICTURE_NAME,
  GET_SCORE,
} from './actionTypes';

export const headerInfos = (name, picture) => ({
  type: GET_PICTURE_NAME,
  name,
  picture,
});

export const headerScore = (score) => ({
  type: GET_SCORE,
  score,
});
