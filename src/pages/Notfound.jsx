import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import travolta from "../assets/travolta.gif";

function Notfound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page Not Found!</p>
          <img
            src={travolta}
            alt="not found"
            className="h-[100px] mx-auto"
          />
          <Link
            className="btn btn-outline btn-warning btn-lg"
            to="/"
          >
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
