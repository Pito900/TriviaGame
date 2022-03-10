import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pictureThunk } from '../redux/actions/ranking';

class Header extends React.Component {
  componentDidMount() {
    console.log(pictureThunk());
  }

  async currenciesThunk() {
    const { currenciesThunk } = this.props;
    await currenciesThunk();
  }

  render() {
    const {
      name,
      score,
    } = this.props;
    return (
      <section>
        <img src="" alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </section>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  score: player.score,
});

Header.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
