import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class HomeGame extends React.Component {
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
