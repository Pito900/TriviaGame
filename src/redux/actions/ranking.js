import {
  GET_PICTURE,
  FETCH_API,
} from './actionTypes';
import { getImgFromAPI } from '../../APIservices/Api';

const getPicture = (picture) => ({
  type: GET_PICTURE,
  payload: picture,
});

export const pictureThunk = () => async (dispatch) => {
  dispatch({ type: FETCH_API });
  const pictureAPI = await getImgFromAPI();
  dispatch(getPicture({ pictureAPI }));
};

export default getPicture;
