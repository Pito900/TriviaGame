import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getTokenFromAPI } from '../APIservices/Api';
import { getToken } from '../redux/actions/token';

class HomeGame extends React.Component {
  componentDidMount() {
    this.gettingToken();
  }

gettingToken = async () => {
  const objToken = await getTokenFromAPI();
  const { token } = objToken;
  const { dispatch } = this.props;
  dispatch(getToken(token));

  const tokenKey = JSON.stringify(token);
  localStorage.setItem('token', tokenKey);
}

render() {
  return (
    <Header />
  );
}
}

HomeGame.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(HomeGame);
