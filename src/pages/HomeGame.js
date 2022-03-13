import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Questions from '../components/Questions';

class HomeGame extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Questions />
      </>
    );
  }
}

HomeGame.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(HomeGame);
