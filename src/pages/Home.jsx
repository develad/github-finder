import React, { useContext } from "react";
import EmptyUsersCard from "../components/users/EmptyUsersCard";
import UsersResults from "../components/users/UsersResults";
import UsersSearch from "../components/users/UsersSearch";
import GithubContext from "../context/github/GithubContext";

function Home() {
  const { users } = useContext(GithubContext);
  return (
    <>
      <UsersSearch />
      {users.length === 0 ? <EmptyUsersCard /> : <UsersResults />}
    </>
  );
}

export default Home;
