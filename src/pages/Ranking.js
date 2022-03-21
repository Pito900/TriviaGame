import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../CSS/ranking.css';

class Ranking extends React.Component {
    handleClick = () => {
      const { history } = this.props;
      history.push('/');
    }

    handleLocalStorage = () => {
      const generalRanking = JSON.parse(localStorage.getItem('ranking'));
      return generalRanking.sort((a, b) => b.score - a.score);
      // função básica de comparação que tá no link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort, o item a e b são comparados entre si pelo score, e joga o de score menor para o final
    }

    render() {
      return (
        <section className="Ranking">
          <section>
            <h1
              className="Ranking-title"
              data-testid="ranking-title"
            >
              Ranking
            </h1>
          </section>
          <div className="Ranking-subtitle">
            <p>Imagem</p>
            <p>Player</p>
            <p>Score</p>
          </div>
          {
            this.handleLocalStorage().map((ranking, index) => (
              <div
                className="Ranking-list"
                key={ index }
              >
                <div className="Ranking-item">
                  <img
                    className="Ranking-image"
                    src={ ranking.picture }
                    alt="gravatar"
                  />
                  <p
                    className="Player-name"
                    data-testid={ `player-name-${index}` }
                  >
                    { ranking.name }
                  </p>
                  <p
                    data-testid={ `player-score-${index}` }
                  >
                    { ranking.score }
                  </p>
                </div>
              </div>
            ))
          }
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="btn-go-home"
          >
            Login
          </button>
        </section>
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
