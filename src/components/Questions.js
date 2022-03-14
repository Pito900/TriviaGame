import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Questions extends React.Component {
  state ={
    questionNumber: 0,
    category: '',
    question: '',
    allQuestions: [],
    correctAnswer: '',
    disabledResponses: true,
    time: 8,
  }

  componentDidMount() {
  // coloquei isso aqui para o estado inicial das perguntas ser o result[0]
    const { questions: { results } } = this.props;
    const {
      category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = results[0];
    const allQuestions = [correctAnswer, incorrectAnswers];
    this.setState({
      category,
      question,
      allQuestions,
      correctAnswer,
      clicked: false,
    });
    this.randomVectorQuestions(incorrectAnswers, correctAnswer);
    this.wait5Secs();
    this.countdown();
  }

  wait5Secs = () => {
    this.setState({
      disabledResponses: true, // para dps do next ele começar true dnv e dps de 5 segundos ser false
    });
    const time5sec = 5000;
    setTimeout(() => this.setState({
      disabledResponses: false,
    }), time5sec);
  }

  countdown = () => {
    const ONE_SECOND = 1000;
    const secondsCountdown = setInterval(() => {
      this.setState((state) => ({
        time: state.time - 1,
      }));
    }, ONE_SECOND);
    this.clearCountdown(secondsCountdown);
  }

  clearCountdown = (interval) => {
    if (interval < 0) {
      clearInterval(interval);
    } else {
      const SECONDS = 8000;
      setTimeout(() => clearInterval(interval), SECONDS);
    }
  }

  nextQ = () => { // funcionalidade para passar para a proxima pergunta
    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber + 1,
    }), () => {
      const { questions: { results } } = this.props;
      const { questionNumber } = this.state;
      const {
        category,
        question,
        correct_answer: correctAnswer,
        incorrect_answers: incorrectAnswers,
      } = results[questionNumber];
      const allQuestions = [correctAnswer, incorrectAnswers];
      this.setState({
        category,
        question,
        allQuestions,
        correctAnswer,
        time: 8,
      });
      this.randomVectorQuestions(incorrectAnswers, correctAnswer);
      this.wait5Secs();
      this.countdown();
    });
  }
  // para fazer o seguinte passo utilizamos https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/#:~:text=random()%20*%20(i%20%2B%201,utilizando%20a%20sintaxe%20Destructuring%20Assignment%20.

  randomVectorQuestions = (incorrectAnswers, correctAnswer) => {
    const range = 0.5; // no magic number
    const qVetor = [correctAnswer, ...incorrectAnswers];
    const allQuestions = qVetor.sort(() => Math.random() - range);
    this.setState({
      allQuestions,
    });
  }

  clicked = () => {
    this.setState({
      clicked: true,
    });
  }

  responding = (item) => {
    const { correctAnswer } = this.state;
    if (item === correctAnswer) {
      return { border: '3px solid rgb(6, 240, 15)' };
    }
    return { border: '3px solid rgb(255, 0, 0)' };
  }

  render() {
    const {
      category,
      question,
      allQuestions,
      correctAnswer,
      clicked,
      disabledResponses,
      time,
    } = this.state;
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
        <section data-testid="answer-options">
          {allQuestions.map((item) => (
            <button
              key={ item }
              type="button"
              data-testid={ item === correctAnswer ? 'correct-answer'
                : (`wrong-answer-${
                  allQuestions.indexOf(`${item}`)
                }`) }
              onClick={ this.clicked }
              style={ clicked ? this.responding(item)
                : { } }
              disabled={ disabledResponses }
            >
              {item}
            </button>
          ))}
        </section>
        <button
          type="button"
          data-testid="btn-next"
          onClick={ this.nextQ }
          // disabled={ isDisabled }
        >
          Next
        </button>
        <div>
          {time}
        </div>

      </>
    );
  }
}

Questions.propTypes = {
  dispatch: PropTypes.func,
  token: PropTypes.string,
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ token, questions }) => ({
  token,
  questions,
});

export default connect(mapStateToProps)(Questions);
