import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BoolQuestions extends React.Component {
  render() {
    const {
      category,
      question,
      difficulty,
      correctAnswer,
      incorrectAnswers,
    } = this.props;
    return (
      <>
        <h2
          data-testid="question-category"
        >
          {' '}
          { category }
        </h2>

        <h3
          data-testid="question-text"
        >
          { question }
        </h3>

        { correct_answer
          ? <div data-testid="answer-options">
            <button type="button" data-testid="correct-answer">True</button>
          </div>
          : <div data-testid="answer-options">
            <button type="button" data-testid="correct-answer">False</button>
          </div> }
      </>

    );
  }
}

BoolQuestions.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(BoolQuestions);
