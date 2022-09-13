const apiUrl = "https://jsonplaceholder.typicode.com";
// axios or any other library used in one place

const getFetch = (url, params = {}) => {
  const queryString = Object.entries(params)
    .map((param) => `${param[0]}=${param[1]}`)
    .join("&");

  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

// -----

const getUsers = () => {
  return getFetch(`${apiUrl}/users`);
};

const getUsersPosts = (userId) => {
  return getFetch(`${apiUrl}/posts`, { userId });
};

getUsers().then((users) => {
  users.forEach((user) => {
    getUsersPosts(user.id).then((posts) => {
      console.log(user.name, posts.length);
    });
  });
});
