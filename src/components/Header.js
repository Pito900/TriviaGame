import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './header.css';

class Header extends React.Component {
  render() {
    const {
      name,
      score,
      picture,
    } = this.props;
    return (
      <header>
        <div>
          <img class="avatar" src={ picture } alt="" data-testid="header-profile-picture" />
          <p class="name" data-testid="header-player-name">{ name }</p>
        </div>
        <p class="score" data-testid="header-score">{ score }</p>
      </header>
    );
  }
}

const mapStateToProps = ({ player, ranking }) => ({
  name: player.name,
  score: ranking.score,
  gravatarEmail: player.gravatarEmail,
  picture: ranking.picture,
});

Header.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  picture: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
