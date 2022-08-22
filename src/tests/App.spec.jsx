import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('<App />', () => {
  it('Testa se a página Search é a primeira a ser renderizada', () => {
    renderWithRouter(<App />);

    const getTitle = screen.getByRole('heading', { level: 1, name: /Github Explorer/i });

    expect(getTitle).toBeInTheDocument();
    // expect(history.location.pathname).toBe('/')
  });

  it('Testar se a página FavoriteRepositories é renderizado quando acessado url "/repositories/favorites"', async () => {
    const { history } = renderWithRouter(<App />);

    const urlFavorites = '/repositories/favorites';

    history.push(urlFavorites);

    await waitFor(() =>
      expect(
        screen.queryByRole('heading', { level: 1, name: /Github Explorer/i })
      ).not.toBeInTheDocument()
    );

    expect(history.location.pathname).toBe(urlFavorites);

    const getFavoriteTitle = screen.getByRole('heading', {
      level: 1,
      name: /favoritos/i,
    });

    expect(getFavoriteTitle).toBeInTheDocument();
  });
});
