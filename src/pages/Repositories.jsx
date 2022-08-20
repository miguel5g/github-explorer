import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../styles/Repositories.module.css';
import RepositoryCard from '../components/RepositoryCard';
import { favoriteRepository } from '../services/FavoriteRepositories';
import { getUserRepositories } from '../services/Github';

class Repositories extends React.Component {
  state = {
    isLoadMoreEnable: true,
    isLoading: true,
    repositories: [],
    currentPage: 1,
    userNotFound: false,
  };

  async componentDidMount() {
    const { login } = this.props.match.params;
    const repositories = await getUserRepositories(login);

    if (!repositories) {
      this.setState({
        isLoading: false,
        userNotFound: true,
      });

      return;
    }

    this.setState({
      isLoading: false,
      repositories,
    });
  }

  handleLoadMoreRepositories = async () => {
    const { login } = this.props.match.params;
    const { currentPage } = this.state;

    const repositories = await getUserRepositories(login, currentPage + 1);

    if (!repositories) {
      this.setState({
        isLoading: false,
        userNotFound: true,
      });

      return;
    }

    this.setState({
      isLoading: false,
      repositories,
      currentPage: currentPage + 1,
    });
  };

  handleFavoriteRepository = (repository) => {
    console.log(repository);
    favoriteRepository(repository);
  };

  render() {
    const { isLoadMoreEnable, isLoading, repositories, userNotFound } = this.state;
    const { login } = this.props.match.params;

    return (
      <div className={styles.repositoriesPage}>
        <div className={styles.pageWrapper}>
          <header className={styles.header}>
            <h1>Repositórios de {login}</h1>
            <Link to="/repositories/favorites">Ver Favoritos</Link>
          </header>

          <main className={styles.content}>
            {isLoading && <p>Carregando...</p>}

            {!isLoading && !userNotFound && (
              <ul className={styles.repositories}>
                {repositories.map((repository) => (
                  <RepositoryCard
                    key={repository.id}
                    id={repository.id}
                    fullName={repository.full_name}
                    description={repository.description}
                    htmlUrl={repository.html_url}
                    onToggleFavorite={this.handleFavoriteRepository}
                    isFavorite={false}
                  />
                ))}
              </ul>
            )}

            {isLoadMoreEnable && !isLoading && <button>Carregar Mais</button>}
          </main>
        </div>
      </div>
    );
  }
}

Repositories.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      login: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Repositories;
