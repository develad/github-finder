// 1. the reducer function get ***state and action*** as its args
// 2. action is typically going to be an object

const GithubReducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        //action.payload === payload:data from GithubContext.js file
        users: action.payload,
        isLoading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "CLAER_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default GithubReducer;
