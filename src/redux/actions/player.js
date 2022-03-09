import {
  SAVE_INFOS,
  GRAVATAR_EMAIL,
} from './actionTypes';

const saveInfos = (name, assertions, score) => ({
  type: SAVE_INFOS,
  payload: name,
  assertions,
  score,
});

const getEmail = (gravatarEmail) => ({
  type: GRAVATAR_EMAIL,
  payload: gravatarEmail,
});

export default { saveInfos, getEmail };
