import React from 'react';
import Header from '../components/Header';

class Settings extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <h1 data-testid="settings-title">Configurações</h1>
        </section>
      </>
    );
  }
}

export default Settings;
