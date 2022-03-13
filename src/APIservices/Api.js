import { connect } from 'react-redux';

export const getTokenFromAPI = async () => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await request.json();
  return data;
};

export const getQuestionsFromAPI = async (token) => {
  const requestQuestions = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const ObjQuestionsAttributes = await requestQuestions.json();
  const { response_code, results } = ObjQuestionsAttributes;
  const RESPONSE_0 = 0;
  const RESPONSE_3 = 3;
  if (response_code === RESPONSE_0) {
    return results;
  }

  if (response_code === RESPONSE_3) {
    console.log('Npassou');
    const ObjToken = await getTokenFromAPI();
    const requestQuestions = await fetch(`https://opentdb.com/api.php?amount=5&token=${ObjToken.token}`);
    const ObjQuestionsAttributes = await requestQuestions.json();
    const { results } = ObjQuestionsAttributes;
    return results;
  }
};

export default connect()(getTokenFromAPI);
