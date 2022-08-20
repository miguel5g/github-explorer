const FAVORITE_REPOSITORIES_KEY = 'favorite-repositories';

function writeStorage(data) {
  localStorage.setItem(FAVORITE_REPOSITORIES_KEY, JSON.stringify(data));
}

function readStorage() {
  return JSON.parse(localStorage.getItem(FAVORITE_REPOSITORIES_KEY) || '[]');
}

function favoriteRepository(repository) {
  const favorite = readStorage();

  if (favorite.find(({ id }) => id === repository.id)) return;

  writeStorage([...favorite, repository]);
}

function getFavoritesRepositories() {
  return readStorage();
}

function removeFavoriteRepository(id) {
  const favorite = readStorage();

  writeStorage(favorite.filter((repository) => repository.id !== id));
}

export { favoriteRepository, getFavoritesRepositories, removeFavoriteRepository };
