import {
  SAVE_INFOS,
  GRAVATAR_EMAIL,
  FETCH_API,
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

export const expenseThunk = (expense) => async (dispatch) => {
  dispatch(FETCH_API);
  const picture = await getImgFromAPI(); // Estou esperando os dados q vem API e colocando na exchangeRates
  dispatch(expenseData({ ...expense, exchangeRates })); // Estou armazenando no expense as informações advindas da API
};

export default { saveInfos, getEmail };
