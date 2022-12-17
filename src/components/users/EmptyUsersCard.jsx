import React from "react";
import { FaUsersSlash } from "react-icons/fa";

function EmptyUsersCard() {
  return (
    <>
      <div className="card shadow-lg h-[90%] flex items-start justify-end bg-[url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80')] bg-cover bg-bottom pl-8 text-white">
        <FaUsersSlash className="text-5xl mb-[-1rem]" />
        <h2 className="text-2xl my-4">Try a new search...</h2>
      </div>
      <div className="my-8 text-center"></div>
    </>
  );
}

export default EmptyUsersCard;
