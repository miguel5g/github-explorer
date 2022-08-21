const FAVORITE_REPOS = 'favorite-repos'

// Ler
const readFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(FAVORITE_REPOS)) || [];

// Adicionar
const addFavoriteRepo = (repo) => {
  const favRepos = readFromLocalStorage();
  localStorage.setItem(FAVORITE_REPOS, JSON.stringify([...favRepos, repo]));
};

// Remover
const removeFavoriteRepo = (repo) => {
  const favRepos = readFromLocalStorage();
  const newFavRepos = favRepos.filter(({ id }) => id !== repo.id);

  localStorage.setItem(FAVORITE_REPOS, JSON.stringify(newFavRepos));
};

export { addFavoriteRepo, readFromLocalStorage, removeFavoriteRepo };
