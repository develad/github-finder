import { useReducer, createContext } from "react";
// import { useState, createContext } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  // useReducer Hook receive: 1. reducer function 2.initial state as its arguments
  // useReducer Hook brings back a state and a dispatch function into a destructured array (Tuple) much like useState

  const initialState = {
    users: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get initial users for testing purposes
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_API_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();

  //   // console.log(data);

  //   // setUsers(data);
  //   // setIsLoading(false);

  //   // dispatching with an object (action) of type and a payload
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data, // in GithubReducer file: users: action.payload
  //   });
  // };

  // Search for github users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_API_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const { items } = await response.json();

    // console.log(data);

    // setUsers(data);
    // setIsLoading(false);

    // dispatching with an object (action) of type and a payload
    dispatch({
      type: "GET_USERS",
      payload: items, // in GithubReducer file: users: action.payload
    });
  };

  // NOTE:: Always dispatch with an object with a type:'STRING' and a payload:'any' !!!!
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearUsers = () => dispatch({ type: "CLAER_USERS" });

  //   console.log(state);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

export { GithubProvider };
