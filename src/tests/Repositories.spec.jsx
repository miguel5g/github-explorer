import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import Repositories from '../pages/Repositories';
import renderWithRouter from './helpers/renderWithRouter';
import repositories from './helpers/data';

describe('<Repositories />', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(repositories),
    });
  });

  test('Testando se a pagina é renderizada', async () => {
    renderWithRouter(<Repositories match={{ params: { login: 'turma_23' } }} />);

    await waitFor(() =>
      expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
    );

    expect(screen.getByRole('heading', { name: /repositórios/i })).toBeInTheDocument();
  });

  test('Testa se renderiza os dados da api em tela', async () => {
    renderWithRouter(<Repositories match={{ params: { login: 'turma_23' } }} />);

    await waitFor(() =>
      expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
    );

    repositories.forEach((repo, index) => {
      const repoTitle = screen.getByRole('heading', {
        level: 2,
        name: repositories[index].full_name,
      });
      const repoDescription = screen.getByText(repo.description);
      const repoLink = screen.getAllByRole('link', { name: /ver no github/i });

      expect(repoTitle).toBeInTheDocument();
      expect(repoDescription).toBeInTheDocument();
      expect(repoLink[index]).toHaveAttribute('href', repo.html_url);
    });

    // expect(repoLink).toHaveLength(3)
  });
});
