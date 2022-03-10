const INITIAL_STATE = '';

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_KEY':
    return action.payload.token;
  default:
    return state;
  }
};

export default token;
