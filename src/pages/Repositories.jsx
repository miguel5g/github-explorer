import React from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import getUserRepos from '../services/Github';
import { addFavoriteRepo } from '../services/FavoriteRepositories';

class Repositories extends React.Component {
  state = {
    isLoading: true,
    userRepos: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { login },
      },
    } = this.props;

    const repos = await getUserRepos(login);

    this.setState({
      userRepos: repos,
      isLoading: false,
    });
  }

  handleFavoriteAdd = (repo) => {
    addFavoriteRepo(repo);
  };

  render() {
    const { isLoading, userRepos } = this.state;
    const {
      match: {
        params: { login },
      },
    } = this.props;

    if (isLoading) return <Loading />;

    return (
      <div>
        <h1>Repositórios de {login}</h1>
        <Link to="/repositories/favorites">Ver favoritos</Link>

        <div>
          {userRepos.map((repo) => (
            <div key={repo.id}>
              <h2>{repo.full_name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url}>Ver no Github</a>
              <button type="button" onClick={() => this.handleFavoriteAdd(repo)}>
                Adicionar aos favoritos
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Repositories;
