import {
  GET_PICTURE,
} from './actionTypes';

const getPicture = (picture) => ({
  type: GET_PICTURE,
  payload: picture,
});

export default getPicture;
