import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/NotFound.module.css';
import notFoundImage from '../assets/page-not-found.svg';

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.notFoundPage}>
        <div className={styles.pageWrapper}>
          <img src={notFoundImage} alt="404 page not found" />
          <h1>Não encontramos o que você procurava...</h1>
          <p>Isso nunca aconteceu antes, lamentamos que tenha sido o primeiro</p>

          <Link to="/" className="">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
