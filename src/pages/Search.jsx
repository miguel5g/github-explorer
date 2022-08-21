import React from 'react';

class Search extends React.Component {
  state = {
    inputLogin: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { inputLogin } = this.state;
    const { history } = this.props;

    history.push(`/repositories/${inputLogin}`);
  };

  render() {
    const { inputLogin } = this.state;

    return (
      <div>
        <header>
          <h1>Github Explorer</h1>
          <p>Explorador de repositórios do github</p>
        </header>

        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="login">
            Digite o login do usuário
            <input
              type="text"
              id="login"
              placeholder="turma 23"
              name="inputLogin"
              value={inputLogin}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Search;
