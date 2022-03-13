import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { questions } from '../redux/actions/questions';
import { getQuestionsFromAPI } from '../APIservices/Api';
import BoolQuestions from './BoolQuestions';
import MultQuestions from './MultQuestions';

// a ideia aqui era fazer as comparações numa função e chamá-la, mas não funcionou

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      category,
      question,
      type,
      correctAnswer,
      incorrectAnswers,
    };
  }

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

  boolOrMultiple = () => {
    if (type === 'multiple') {
      return (
        <MultQuestions
          category={ category }
          question={ question }
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
        />
      );
    }
    if (type === 'boolean') {
      return (
        <BoolQuestions
          category={ category }
          question={ question }
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
        />
      );
    }
  };

  render() {
    return (
      { this.boolOrMultiple }
    );
  }
}

Questions.propTypes = {
  dispatch: PropTypes.func,
  token: PropTypes.string,
  category: PropTypes.string,
  question: PropTypes.string,
  correctAnswer: PropTypes.string,
  incorrectAnswer: PropTypes.string,
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
