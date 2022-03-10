import {
  SAVE_INFOS,
  GRAVATAR_EMAIL,
} from './actionTypes';

export const saveInfos = (name, assertions, score) => ({
  type: SAVE_INFOS,
  name,
  assertions,
  score,
});

export const getEmail = (gravatarEmail) => ({
  type: GRAVATAR_EMAIL,
  gravatarEmail,
});
