// https://api.github.com/users/miguel5g/repos

const getUserRepos = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const result = await response.json();
  return result;
};

export default getUserRepos;
