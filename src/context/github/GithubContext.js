import { useState, createContext } from "react";

const GithubContext = createContext();

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_API_URL}/users`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const data = await response.json();

    console.log(data);
    setUsers(data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

export { GithubProvider };
