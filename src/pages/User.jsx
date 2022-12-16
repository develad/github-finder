import {
  FaCodepen,
  FaGithub,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaMapMarkerAlt,
  FaDesktop,
  FaTwitter,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import Repos from "../components/repos/Repos";

const User = () => {
  const { user, getUser, isLoading, getUserRepos, repos } =
    useContext(GithubContext);
  const params = useParams();
  //   console.log(params);

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeHttp = (urlAddress) => {
    if (!(urlAddress.includes("http://") | urlAddress.includes("https://"))) {
      return urlAddress;
    }
    const regex = new RegExp("http://|https://", "gmi");
    return urlAddress.split(regex)[1];
  };

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link
            to="/"
            className="btn btn-outline"
          >
            <FaArrowAltCircleLeft className="mr-2" />
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-4 md:mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img
                  src={avatar_url}
                  alt="avatar_url"
                />
              </figure>
              <div className="card-body justify-end ">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0 mt-[-0.5rem]">{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline w-full md:w-auto"
                >
                  Visit Github Profile
                  <FaGithub
                    className="ml-4"
                    size={16}
                  />
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-sm bg-base-100 md:stats">
              {location && (
                <div className="stat">
                  <div className="stat-title flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    Location
                  </div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title flex items-center">
                    <FaDesktop className="mr-2" />
                    Website
                  </div>
                  <div className="text-lg stat-value">
                    <a
                      href={blog}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {removeHttp(blog)}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title flex items-center">
                    <FaTwitter className="mr-2" />
                    Twitter
                  </div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 md:stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    </>
  );
};

export default User;
