import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Search.module.css';

class Search extends React.Component {
  state = {
    login: '',
  };

  handleChangeInput = (event) => {
    this.setState({
      login: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { history } = this.props;
    const { login } = this.state;

    if (!login || !login.trim()) return;

    history.push(`/repositories/${login}`);
  };

  render() {
    const { login } = this.state;

    return (
      <div className={styles.searchPage}>
        <div className={styles.pageWrapper}>
          <header className={styles.header}>
            <h1>Github Explorer</h1>
            <p>Explorador de repositórios do github</p>
          </header>

          <form className={styles.form} onSubmit={this.handleSubmit}>
            <label htmlFor="login">Digite o login do usuário</label>
            <input
              id="login"
              type="text"
              name="login"
              placeholder="miguel5g"
              value={login}
              onChange={this.handleChangeInput}
            />

            <button type="submit">Pesquisar</button>
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Search;
