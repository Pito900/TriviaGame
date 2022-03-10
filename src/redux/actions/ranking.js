import {
  GET_PICTURE_SCORE_NAME,
} from './actionTypes';

export const headerInfos = (name, score, picture) => ({
  type: GET_PICTURE_SCORE_NAME,
  name,
  score,
  picture,
});

export default headerInfos;
