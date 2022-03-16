const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GRAVATAR_NAME_EMAIL':
    return { ...state,
      gravatarEmail: action.gravatarEmail,
      name: action.name,
    };
  case 'SAVE_INFOS_PLAYER':
    return { ...state,
      score: action.score,
      assertions: action.assertions,
    };
  default:
    return state;
  }
};

export default player;
