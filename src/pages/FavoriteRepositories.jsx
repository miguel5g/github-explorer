import React from 'react';
import { Link } from 'react-router-dom';
import RepositoryCard from '../components/RepositoryCard';

import {
  getFavoritesRepositories,
  removeFavoriteRepository,
} from '../services/FavoriteRepositories';

class FavoriteRepositories extends React.Component {
  state = {
    isLoading: true,
    repositories: [],
  };

  componentDidMount() {
    const repositories = getFavoritesRepositories();

    this.setState({
      isLoading: false,
      repositories,
    });
  }

  handleRemoveFavoriteRepository = ({ id }) => {
    removeFavoriteRepository(id);

    this.setState({
      isLoading: true,
    });

    const repositories = getFavoritesRepositories();

    this.setState({
      isLoading: false,
      repositories,
    });
  };

  render() {
    const { isLoading, repositories } = this.state;

    return (
      <div>
        <div>
          <header>
            <h1>Repositórios favoritos</h1>
            <Link to="/">Voltar ao início</Link>
          </header>

          <main>
            {isLoading && <p>Carregando...</p>}

            {!isLoading && (
              <ul>
                {repositories.map((repository) => (
                  <RepositoryCard
                    key={repository.id}
                    isFavorite={true}
                    onToggleFavorite={this.handleRemoveFavoriteRepository}
                    {...repository}
                  />
                ))}
              </ul>
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default FavoriteRepositories;
