import { useState, useContext, useRef, useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
// import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

import { toast } from "react-toastify";

function UsersSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  // const { setAlert } = useContext(AlertContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.style.outline = "5px solid #44ef9c";
    inputRef.current.focus();
  }, [users]);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      // setAlert("Please enter something", "error");
      setText("");
      toast.error("Please enter something");
    } else {
      // @todo - search users
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
                ref={inputRef}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-outline btn-lg btn-error w-full md:w-auto"
            onClick={() => dispatch({ type: "CLAER_USERS" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UsersSearch;
