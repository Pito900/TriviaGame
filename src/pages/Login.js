import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gravatarEmail: '',
      disabled: true,
    };
  }

  handleChangeName = ({ target }) => {
    const { value } = target;
    this.setState({
      name: value,
    }, this.isValid);
  }

  handleChangeEmail = ({ target }) => {
    const { value } = target;
    this.setState({
      gravatarEmail: value,
    }, this.isValid);
  }

  isValid = () => {
    const {
      name,
      gravatarEmail,
    } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailValid = regex.test(gravatarEmail);
    const MIN_LENGTH = 1; // sem magic numbers
    if (name.length >= MIN_LENGTH && emailValid) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const {
      name,
      disabled,
      gravatarEmail,
    } = this.state;
    return (
      <>
        <h3>Login</h3>
        <section>
          <label htmlFor="nome">
            <input
              type="text"
              placeholder="Digite o seu nome"
              id="nome"
              value={ name }
              onChange={ this.handleChangeName }
              data-testid="input-player-name"
            />
          </label>
        </section>
        <section>
          <label htmlFor="email">
            <input
              type="text"
              placeholder="Digite o seu e-mail"
              id="email"
              value={ gravatarEmail }
              onChange={ this.handleChangeEmail }
              data-testid="input-gravatar-email"
            />
          </label>
        </section>
        <section>
          <button
            type="button"
            disabled={ disabled }
            data-testid="btn-play"
          >
            Play
          </button>
        </section>
      </>
    );
  }
}

export default Login;
