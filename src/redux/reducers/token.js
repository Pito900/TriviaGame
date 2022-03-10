const INITIAL_STATE = {
  key: '',
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_KEY':
    return {
      key: action.key,
    };
  default:
    return state;
  }
};

export default token;
