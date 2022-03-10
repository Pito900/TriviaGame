import { connect } from 'react-redux';

export const getTokenFromAPI = async () => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await request.json();
  return data;
};

export const getJokesFromAPI = async () => {
  const ObjToken = await getJokesFromAPI();
  const { token } = ObjToken;
  const requestJoke = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const ObjJokesAttributes = await requestJoke.json();
  return ObjJokesAttributes;
};

export default connect()(getTokenFromAPI);
