import React from "react";
import { FaUsersSlash } from "react-icons/fa";

function EmptyUsersCard() {
  return (
    <div className="card shadow-lg h-5/6 flex items-center justify-center bg-[#46464626] md:bg-inherit">
      <FaUsersSlash className="text-5xl" />
      <h2 className="text-2xl my-4">Try a new search...</h2>
    </div>
  );
}

export default EmptyUsersCard;
