import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questions } from '../redux/actions/questions';
import { getQuestionsFromAPI } from '../APIservices/Api';
import MultQuestions from './MultQuestions';

class Questions extends React.Component {
  componentDidMount() {
    this.gettingQuestions();
  }

  gettingQuestions = async () => {
    const { token } = this.props;
    console.log(token);
    const results = await getQuestionsFromAPI(token);
    const { dispatch } = this.props;
    dispatch(questions(results));
  }

  render() {
    const {
      category,
      question,
      type,
      difficulty,
      correctAnswer,
      incorrectAnswers,
    } = this.props;

    return (
      <MultQuestions
        type={ type }
        category={ category }
        question={ question }
        difficulty={ difficulty }
        correct_answer={ correctAnswer }
        incorrect_answers={ incorrectAnswers }
      />
    );
  }
}

Questions.propTypes = {
  dispatch: PropTypes.func,
  token: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ token, questions }) => ({
  token,
  type: questions.results.type,
  difficulty: questions.difficulty,
  question: questions.question,
  correctAnswer: questions.correct_answer,
  incorrectAnswers: questions.incorrect_answers,
});

export default connect(mapStateToProps)(Questions);
