import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const { assertions, score } = this.props;
    console.log(assertions, score);
    const ASSERTIONS_MIN = 3;
    return (
      <>
        <Header />
        <section>
          {(assertions < ASSERTIONS_MIN)
            ? <h3 data-testid="feedback-text">Could be better...</h3>
            : <h3 data-testid="feedback-text">Well Done!</h3>}
        </section>
        <section>
          <h4 data-testid="feedback-total-score">{score}</h4>
          <h4 data-testid="feedback-total-question">{assertions}</h4>
        </section>
        <button
          type="button"
          onClick={ this.handleClick }
          datatestid="btn-ranking"
        >
          Ranking
        </button>
      </>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
