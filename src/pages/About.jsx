import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4 text-white">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the React Front To Back Udemy course by Brad Traversy
        .
      </p>
      <p className="text-lg text-gray-400 mb-4">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="mb-4 text-xl">This React app was rebulid and improved by</p>
      <a
        href="https://github.com/develad"
        target="_blank"
        rel="noreferrer"
        className="flex items-baseline text-2xl font-bold text-white hover:text-green-400 transition duration-150 ease-out hover:ease-in w-fit"
      >
        <FaGithub
          className="mr-2"
          size={32}
        />
        Elad Bar
      </a>
    </>
  );
}

export default About;
