import { connect } from 'react-redux';

export const getTokenFromAPI = async () => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await request.json();
  return data;
};

export const getQuestionsFromAPI = async (token) => {
  const requestQuestions = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const ObjQuestionsAttributes = await requestQuestions.json();
  const { results } = ObjQuestionsAttributes;
  console.log('passou');
  const RESPONSE_0 = 0; // no magic Number
  const RESPONSE_3 = 3;// no magic Number
  if (ObjQuestionsAttributes.response_code === RESPONSE_0) {
    return results;
  }

  if (ObjQuestionsAttributes.response_code === RESPONSE_3) {
    console.log('Npassou');
    const ObjToken = await getTokenFromAPI();
    const requestQuestions2 = await fetch(`https://opentdb.com/api.php?amount=5&token=${ObjToken.token}`);
    const ObjQuestionsAttributes2 = await requestQuestions2.json();
    // const { results } = ObjQuestionsAttributes;
    return ObjQuestionsAttributes2.results;
  }
};

export default connect()(getTokenFromAPI);
