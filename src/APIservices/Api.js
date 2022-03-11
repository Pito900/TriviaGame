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
  if(response_code === 0) {
    console.log('passou')
     return results
   }
  if (response_code === 3) {
    console.log('Npassou')
    const ObjToken = await getTokenFromAPI();
    const requestQuestions = await fetch(`https://opentdb.com/api.php?amount=5&token=${ObjToken.token}`);
    const ObjQuestionsAttributes = await requestQuestions.json();
    const { results } = ObjQuestionsAttributes;
    return results;
  }
};


export default connect()(getTokenFromAPI);
