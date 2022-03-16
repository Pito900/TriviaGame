import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
    handleClick = () => {
      const { history } = this.props;
      history.push('/homegame');
    }

    // criar um array, passar o map formando o item da lista li com as infos (18)

    render() {
      return (
        <>
          <section>
            <h1 data-testid="ranking-title">Ranking</h1>
          </section>
          <button
            type="button"
            onClick={ this.handleClick }
            datatestid="btn-go-home"
          >
            Login
          </button>
        </>
      );
    }
}

const mapStateToProps = ({ ranking }) => ({
  name: ranking.name,
  score: ranking.score,
  picture: ranking.picture,
});

Ranking.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  gravatar: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Ranking);
