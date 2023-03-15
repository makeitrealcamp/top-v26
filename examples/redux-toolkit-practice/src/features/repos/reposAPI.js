export const fetchRepos = async () => {
  const url = "https://api.github.com/users/mariadriada/repos";

  try {
    const request = await fetch(url);
    const data = await request.json();
    return new Promise((res) => {
      res(data);
    });
  } catch (error) {
    return new Promise((res, rej) => {
      rej(error);
    });
  }
};
