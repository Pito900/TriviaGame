const INITIAL_STATE = [
  { name: '',
    score: 0,
    picture: '' },
];

const ranking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_PICTURE_NAME':
    return {
      ...state,
      name: action.name,
      picture: action.picture,
    };
  case 'GET_SCORE':
    return {
      ...state,
      score: action.score,
    };
  default:
    return state;
  }
};

export default ranking;
