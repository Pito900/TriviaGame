import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { headerInfos } from '../redux/actions/ranking';

class Header extends React.Component {
  componentDidMount() {
    this.getImgFromAPI();
  }

  getImgFromAPI = async () => {
    const { gravatarEmail } = this.props;
    const hashGerada = md5(gravatarEmail).toString();
    const request = await fetch(`https://www.gravatar.com/avatar/${hashGerada}`); // daqui temos um objeto
    const requestURL = request.url;
    const { dispatch, name, score } = this.props;
    dispatch(headerInfos(name, score, requestURL)); // colocamos a url q pegamos como sendo uma picture
  };

  render() {
    const {
      name,
      score,
      picture,
    } = this.props;
    console.log(picture);
    return (
      <section>
        <img src={ picture } alt="" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </section>
    );
  }
}

const mapStateToProps = ({ player, ranking }) => ({
  name: player.name,
  score: player.score,
  gravatarEmail: player.gravatarEmail,
  picture: ranking.picture,
});

Header.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  picture: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
