import {
  GET_KEY,
} from './actionTypes';

export const getToken = (key) => ({
  type: GET_KEY,
  key,
});

// export default getToken;
