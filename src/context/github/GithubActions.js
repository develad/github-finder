import axios from "axios";

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const github = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${TOKEN}`,
  },
});

// Search for github users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);

  return response.data.items;

  // dispatching with an object (action) of type and a payload

  // returning the data from the action AND dispatching inside the COMPONENT!!!!
};

export const getUser = async (login) => {
  // setLoading();

  const response = await github.get(`/users/${login}`);
  // console.log(response.data);

  // insted of -> if (!response.ok) !
  if (!response.status === 200) {
    window.location = "/notfound";
  } else {
    return response.data;

    // // dispatching with an object (action) of type and a payload
    // dispatch({
    //   type: "GET_USER",
    //   payload: data, // in GithubReducer file: user: action.payload
    // });
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  // setLoading();

  const params = new URLSearchParams({
    sort: "pushed",
    per_page: 10,
  });
  const response = await github.get(`/users/${login}/repos?${params}`);

  return response.data;

  // // dispatching with an object (action) of type and a payload
  // dispatch({
  //   type: "GET_REPOS",
  //   payload: data, // in GithubReducer file: users: action.payload
  // });
};
