import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";

const User = () => {
  const { user, getUser, clearUser, isLoading } = useContext(GithubContext);
  //   const { user, getUser, clearUsers } = useContext(GithubContext);
  const params = useParams();
  //   console.log(params);

  useEffect(() => {
    clearUser();
    getUser(params.login);
    // eslint-disable-next-line
  }, []);
  return isLoading ? <Spinner /> : <div>{user.login}</div>;
};

export default User;
