import React from 'react';
import { Link } from 'react-router-dom';

import {
  readFromLocalStorage,
  removeFavoriteRepo,
} from '../services/FavoriteRepositories';

class FavoriteRepositories extends React.Component {
  state = {
    favRepos: [],
  };

  componentDidMount() {
    const favRepos = readFromLocalStorage();

    this.setState({ favRepos });
  }

  handleFavoriteRemove = (repo) => {
    removeFavoriteRepo(repo);

    this.setState(({ favRepos }) => ({
      favRepos: favRepos.filter(({ id }) => id !== repo.id),
    }));
  };

  render() {
    const { favRepos } = this.state;

    return (
      <div>
        <h1>Repositórios Favoritos</h1>
        <Link to="/">Voltar ao início</Link>

        <div>
          {favRepos.map((repo) => (
            <div key={repo.id}>
              <h2>{repo.full_name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url}>Ver no Github</a>
              <button type="button" onClick={() => this.handleFavoriteRemove(repo)}>
                Remover dos favoritos
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FavoriteRepositories;
