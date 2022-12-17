import { useReducer, createContext } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  // useReducer Hook receive: 1. reducer function 2.initial state as its arguments
  // useReducer Hook brings back a state and a dispatch function into a destructured array (Tuple) much like useState

  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // isLoading: state.isLoading,
        // repos: state.repos,
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

export { GithubProvider };
