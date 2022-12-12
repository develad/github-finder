import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();
  //   console.log(params);

  useEffect(() => {
    getUser(params.login);
    // eslint-disable-next-line
  }, []);
  return <div>{user.login}</div>;
};

export default User;
