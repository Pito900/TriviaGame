import React from 'react';
import Header from '../components/Header';
import '../CSS/settings.css';

class Settings extends React.Component {
  render() {
    return (
      <div className="settingsPage">
        <Header />
        <section>
          <h1 data-testid="settings-title">Configurações</h1>
        </section>
      </div>
    );
  }
}

export default Settings;
