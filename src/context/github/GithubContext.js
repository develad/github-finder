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
    isLoading: true,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_API_URL}/users`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const data = await response.json();

    // console.log(data);

    // setUsers(data);
    // setIsLoading(false);

    // dispatching with an object (action) of type and a payload
    dispatch({
      type: "GET_USERS",
      payload: data, // in GithubReducer file: users: action.payload
    });
  };

  //   console.log(state);

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

export { GithubProvider };
