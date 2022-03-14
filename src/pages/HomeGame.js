import React from 'react';
import { connect } from 'react-redux';
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

export default connect()(HomeGame);
