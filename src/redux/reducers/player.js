const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GRAVATAR_EMAIL':
    return { ...state,
      gravatarEmail: action.gravatarEmail,
    };
  case 'SAVE_INFOS':
    return { ...state,
      name: action.name,
      score: action.score,
      assertions: action.assertions,
    };
  default:
    return state;
  }
};

export default player;
