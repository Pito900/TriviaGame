import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

export const getTokenFromAPI = async () => {
  const request = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await request.json();
  return data;
};

export const getImgFromAPI = async () => {
  const { gravatarEmail } = this.props;
  const hashGerada = md5(gravatarEmail).toString();
  const request = await fetch(`https://www.gravatar.com/avatar/${hashGerada}`);
  const data = await request.json();
  return data;
};

const mapStateToProps = ({ player }) => ({
  gravatarEmail: player.gravatarEmail,
});

export default connect(mapStateToProps)(getImgFromAPI);
