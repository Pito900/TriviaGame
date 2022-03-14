import React from 'react';
import PropTypes from 'prop-types';

// minha intenção aqui foi fazer o map somente nas incorretas, e talvez depois concatená-lo num array com as corretas e fazer o sort nesse array, porque como está a primeira que está no return sempre vai ser a verdadeira

class MultQuestions extends React.Component {

isRight = () => {
  const {
    category,
    question,
    incorrectAnswers,
  } = this.props;
  const answers = incorrectAnswers; // só estou pegando as incorretas aqui
  const index = answers.indexOf(`${incorrectAnswers}`);
  answers.map(() => (
    <>
      <h2
        data-testid="question-category"
      >
        {' '}
        {category}
      </h2>
      <h3
        data-testid="question-text"
      >
        {question}
      </h3>
      <div data-testid="answer-options">
        <button
          type="button"
          data-testid={ `wrong-answer-${index}` }
        >
          { incorrectAnswers[index] }
        </button>
      </div>
    </>
  ));
};
  render() {
    const {
      correctAnswer,
    } = this.props;

    return (
      <div data-testid="answer-options">
        <button type="button" data-testid="correct-answer">{ correctAnswer }</button>
        <section>
          { this.isRight() }
        </section>
      </div>
    );
  }
}

MultQuestions.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
  correctAnswer: PropTypes.string,
  incorrectAnswer: PropTypes.string,
}.isRequired;



export default MultQuestions;
