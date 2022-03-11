const INITIAL_STATE = {
    results: '',
  };
  
  const results = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'GET_QUESTIONS':
      return { ...state,
        results: action.results,
      };
    default:
      return state;
    }
  };

export default results;
