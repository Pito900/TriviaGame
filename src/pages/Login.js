import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getEmail, saveInfos } from '../redux/actions/player';
import { getTokenFromAPI, getQuestionsFromAPI } from '../APIservices/Api';
import { getToken } from '../redux/actions/token';
import { questionsAc } from '../redux/actions/questions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      assertions: 0,
      score: 0,
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

  handleClick = async () => {
    const { gravatarEmail, name, assertions, score } = this.state;
    const { dispatch, history } = this.props;
    dispatch(getEmail(gravatarEmail));
    dispatch(saveInfos(name, assertions, score));

    const objToken = await getTokenFromAPI();
    /* const { token } = objToken; */
    dispatch(getToken(objToken));
    localStorage.setItem('token', objToken.token);
    const results = await getQuestionsFromAPI(objToken.token);
    dispatch(questionsAc(results));
    history.push('/homegame');
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
            onClick={ this.handleClick }
          >
            Play
          </button>
        </section>
        <section>
          <Link to="/settings">
            <button
              type="button"
              data-testid="btn-settings"
            >
              Configurações
            </button>
          </Link>
        </section>
      </>
    );
  }
}

Login.propTypes = {
  dispatch: Proptypes,
}.isRequired;

export default connect()(Login);
