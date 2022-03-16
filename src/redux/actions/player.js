import {
  SAVE_INFOS_PLAYER,
  GRAVATAR_NAME_EMAIL,
} from './actionTypes';

export const saveInfosPlayer = (assertions, score) => ({
  type: SAVE_INFOS_PLAYER,
  assertions,
  score,
});

export const getNameEmail = (gravatarEmail, name) => ({
  type: GRAVATAR_NAME_EMAIL,
  gravatarEmail,
  name,
});

export const updateScore = (score) => ({
  type: UPDATE_SCORE,
  score,
});
