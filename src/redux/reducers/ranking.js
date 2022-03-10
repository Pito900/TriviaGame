const INITIAL_STATE = [
  { name: '',
    score: 0,
    picture: '' },
];

const ranking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_PICTURE_SCORE_NAME':
    return {
      name: action.name,
      score: action.score,
      picture: action.picture,
    };
  default:
    return state;
  }
};

export default ranking;
