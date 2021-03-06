import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { headerScore } from '../redux/actions/ranking';
import { saveInfosPlayer } from '../redux/actions/player';
<<<<<<< Updated upstream
import '../CSS/questions.css';
=======
import './questions.css'
>>>>>>> Stashed changes

class Questions extends React.Component {
  state ={
    questionNumber: 0,
    category: '',
    question: '',
    allQuestions: [],
    correctAnswer: '',
    disabledResponses: true,
    nextDisabled: true,
    difficulty: '',
    assertions: 0,
    scoreUpdate: 0,
    maxQuestions: 4,
    time: 30,
  }

  componentDidMount() {
  // coloquei isso aqui para o estado inicial das perguntas ser o result[0]
    const { questions: { results }, history } = this.props;

    if (results.length > 0) {
      const {
        category,
        question,
        difficulty,
        correct_answer: correctAnswer,
        incorrect_answers: incorrectAnswers,
      } = results[0];
      const allQuestions = [correctAnswer, incorrectAnswers];
      this.setState({
        category,
        question,
        allQuestions,
        correctAnswer,
        difficulty,
        nextDisabled: true,
        clicked: false,
      });
      this.randomVectorQuestions(incorrectAnswers, correctAnswer);
      this.waitSecs();
      this.countdown();
    } else {
      history.push('/');
    }
  }

  waitSecs = () => {
    this.setState({
      disabledResponses: true, // para dps do next ele começar true dnv e dps de 5 segundos ser false
    });
    const time5sec = 5000;
    const time8sec = 30000;
    setTimeout(() => this.setState({
      disabledResponses: false,
    }), time5sec);
    setTimeout(() => this.setState({
      nextDisabled: false,
      disabledResponses: true,
    }), time8sec);
  }

  countdown = () => {
    const ONE_SECOND = 1000;
    this.x = setInterval(() => { // Desta forma passamos o retorno do setInterval pelo objeto this. para a função nextQ
      this.setState((state) => ({
        time: state.time - 1,
      }));
    }, ONE_SECOND);
  }

  nextQ = () => { // funcionalidade para passar para a proxima pergunta
    console.log('props do question', this.props);
    clearInterval(this.x);

    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber + 1,
    }), () => {
      const { questionNumber, maxQuestions } = this.state;
      if (questionNumber > maxQuestions) {
        const { history } = this.props;
        history.push('/feedback');
      }
      if (questionNumber <= maxQuestions) {
        const { questions: { results } } = this.props;
        const {
          category,
          question,
          difficulty,
          correct_answer: correctAnswer,
          incorrect_answers: incorrectAnswers,
        } = results[questionNumber];
        const allQuestions = [correctAnswer, incorrectAnswers];
        this.setState({
          category,
          question,
          allQuestions,
          correctAnswer,
          difficulty,
          clicked: false,
          nextDisabled: true,
          time: 30,
        });
        this.randomVectorQuestions(incorrectAnswers, correctAnswer);
        this.waitSecs();
        this.countdown();
      }
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

  clicked = (item) => {
    this.setState({
      clicked: true,
      nextDisabled: false,
    });
    const { time, difficulty, correctAnswer } = this.state;
    if (item === correctAnswer) {
      const POINTS = 10;
      const DIFFICULTYPOINTS = {
        easy: 1,
        medium: 2,
        hard: 3,
      };
      const score = POINTS + (time * DIFFICULTYPOINTS[difficulty]);
      const { dispatch } = this.props;
      this.setState(
        (previousState) => ({
          assertions: previousState.assertions + 1,
          scoreUpdate: previousState.scoreUpdate + score,
        }), () => {
          const { scoreUpdate, assertions } = this.state;
          dispatch(headerScore(scoreUpdate));
          dispatch(saveInfosPlayer(assertions, scoreUpdate));
        },
      );
    }
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
      //  questionNumber,
      nextDisabled,
    //  maxQuestions,
    } = this.state;
    return (
<<<<<<< Updated upstream
      <div className="questions">
        <div className="question-category">

          <h2
            className="categoryId"
            data-testid="question-category"
          >
            {' '}
            {category}
          </h2>
          <h3
            id="questionId"
            data-testid="question-text"
          >
            {question}
          </h3>
        </div>
        <div className="timer-options">
          <section className="options" data-testid="answer-options">
            {allQuestions.map((item) => (
              <button
                className={ !disabledResponses ? 'button' : 'button-disable' }
=======
      <div class='questions'>
        <div class="question-category">

        <h2
          class='categoryId'
          data-testid="question-category"
          >
          {' '}
          {category}
        </h2>
        <h3
        id='questionId'
          data-testid="question-text"
          >
          {question}
        </h3>
        </div>
        <div class="timer-options">
          <section class="options" data-testid="answer-options">
            {allQuestions.map((item) => (
              <button
                className={ !disabledResponses ? 'button' : 'button-disable'}
>>>>>>> Stashed changes
                key={ item }
                type="button"
                data-testid={ item === correctAnswer ? 'correct-answer'
                  : (`wrong-answer-${
<<<<<<< Updated upstream
                    allQuestions.indexOf(`${item}`)
=======
                  allQuestions.indexOf(`${item}`)
>>>>>>> Stashed changes
                  }`) }
                onClick={ () => this.clicked(item) }
                style={ clicked ? this.responding(item)
                  : { } }
                disabled={ disabledResponses }
              >
                {item}
              </button>
            ))}
          </section>
<<<<<<< Updated upstream
          <p className="timer">
            <span className="contador">
              {time >= 0 ? time : 0}
=======
          <p class='timer'>
            <span class='contador'>
            {time >= 0 ? time : 0}
>>>>>>> Stashed changes
            </span>
          </p>
        </div>
        <button
<<<<<<< Updated upstream
          className="nextButton"
=======
          class="nextButton"
>>>>>>> Stashed changes
          type="button"
          data-testid="btn-next"
          onClick={ this.nextQ }
          hidden={ nextDisabled }
        >
          Next
        </button>

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      </div>
    );
  }
}

Questions.propTypes = {
  dispatch: PropTypes.func,
  token: PropTypes.string,
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps)(Questions);
