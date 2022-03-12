import React from 'react';
import PropTypes from 'prop-types';

// minha ideia aqui foi fazer uma função que faz as comparações e chamá-la dentro de uma section

class BoolQuestions extends React.Component {
  render() {
    const {
      category,
      question,
      correctAnswer,
      incorrectAnswers,
    } = this.props;

    const answers = incorrectAnswers;
    const index = answers.indexOf(`${incorrectAnswers}`);

    isCorrect = () => {
      if (correctAnswer === 'True') {
        return (
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
              <button type="button" data-testid="correct-answer">Verdadeiro</button>
              <button
                type="button"
                data-testid={ `wrong-answer-${index}` }
              >
                Falso
              </button>
            </div>
          </>
        );
      }
      if (correctAnswer === 'False') {
        return (
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
              <button type="button" data-testid="correct-answer">Falso</button>
              <button
                type="button"
                data-testid={ `wrong-answer-${index}` }
              >
                Verdadeiro
              </button>
            </div>
          </>
        );
      }
    };

    return (
      <section>
        { this.isCorrect }
      </section>
    );
  }
}

BoolQuestions.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
  correctAnswer: PropTypes.string,
  incorrectAnswer: PropTypes.string,
}.isRequired;

export default BoolQuestions;
