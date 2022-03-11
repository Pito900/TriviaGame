import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questions } from '../redux/actions/questions';
import { getQuestionsFromAPI } from '../APIservices/Api'
import MultQuestions from './MultQuestions';

class Questions extends React.Component {

  componentDidMount() {
    this.gettingQuestions()
  }

  gettingQuestions = async () => {
    const { token } = this.props
    console.log(token)
    const results = await getQuestionsFromAPI(token);
    const { dispatch } = this.props;
    dispatch(questions(results))
  }
  render() {
    const {
      category,
      question,
      type,
      difficulty,
      correct_answer,
      incorrect_answers,
  } = this.props
    return (
      <>
        <MultQuestions 
        type={type}
        category={category}
        question={question}
        difficulty={difficulty}
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
        />
      </>

    );
  }
}

Questions.propTypes = {
  dispatch: PropTypes.func,
  token: PropTypes.string
}.isRequired;

const mapStateToProps = ({ token, questions }) => ({
  token: token,
  type: questions.results.type,
  difficulty: questions.difficulty,
  question: questions.question,
  correct_answer: questions.correct_answer,
  incorrect_answers: questions.incorrect_answers,
}); 


export default connect(mapStateToProps)(Questions);
