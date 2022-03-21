import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '../Css/Feedback.css';

class Feedback extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  handleClickPlay = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { assertions, score } = this.props;
    console.log(assertions, score);
    const ASSERTIONS_MIN = 3;

    return (
      <div className="feedbackPage">
        <Header className="image" />
        <section>
          {(assertions < ASSERTIONS_MIN)
            ? <h3 data-testid="feedback-text">Could be better...</h3>
            : <h3 data-testid="feedback-text">Well Done!</h3>}
        </section>
        <section className="punctuation">
          <h4 data-testid="feedback-total-score">
            {score}
          </h4>
          <h4 data-testid="feedback-total-question">
            {assertions}
          </h4>
        </section>
        <div>
          <button
            className="buttons"
            type="button"
            onClick={ this.handleClick }
            data-testid="btn-ranking"
          >
            Ranking
          </button>

          <button
            type="button"
            className="buttons"
            onClick={ this.handleClickPlay }
            data-testid="btn-play-again"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.number,
  score: PropTypes.score,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
