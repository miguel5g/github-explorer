async function getUserRepositories(login, page = 1) {
  if (!login || !login.trim()) throw new Error('Invalid login');

  return fetch(`https://api.github.com/users/${login.trim()}/repos?page=${page}`)
    .then((response) => response.json())
    .then((data) => (data.message ? null : data));
}

export { getUserRepositories };
