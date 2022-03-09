import {
  GET_KEY,
} from './actionTypes';

const getToken = (key) => ({
  type: GET_KEY,
  payload: key,
});

export default getToken;
