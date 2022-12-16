import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    // navbar and text-neutral-content is a daisyui utility class
    <nav className="navbar mb-4 shadow-lg bg-neutral text-white ">
      <div className="container mx-auto md:w-4/5">
        <div className="flex-none px-2">
          <FaGithub className="inline pr-2 text-3xl" />
          {/* align-middle === vertical-align: middle; aligning the Github icon and the title to the center */}
          <Link
            to="/"
            className="text-lg font-bold align-middle"
          >
            {title}
          </Link>
        </div>
        {/* Taking all the remaining available space in the container with the flex-1 property */}
        <div className="flex-1 ml-2">
          <div className="flex justify-end">
            <Link
              to="/"
              // btn and btn-ghost is a daisyui utility class
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
