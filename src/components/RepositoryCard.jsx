import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/RepositoryCard.module.css';

class RepositoryCard extends React.Component {
  render() {
    const { id, fullName, description, htmlUrl, isFavorite, onToggleFavorite } =
      this.props;

    return (
      <div className={styles.repositoryCardContainer}>
        <h3>{fullName}</h3>
        <p>{description}</p>

        <div>
          <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
            Ver no Github
          </a>

          <button
            type="button"
            onClick={() => onToggleFavorite({ id, fullName, description, htmlUrl })}
          >
            {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
          </button>
        </div>
      </div>
    );
  }
}

RepositoryCard.propTypes = {
  fullName: PropTypes.string.isRequired,
  description: PropTypes.string,
  htmlUrl: PropTypes.string.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

RepositoryCard.defaultProps = {
  description: '',
};

export default RepositoryCard;
