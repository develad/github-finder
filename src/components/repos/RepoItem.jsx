import React from 'react';
import PropTypes from 'prop-types';
import {
  FaClock,
  FaEye,
  FaInfo,
  FaLink,
  FaStar,
  FaUtensils,
} from 'react-icons/fa';

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    pushed_at,
    topics,
  } = repo;

  const date = new Date(pushed_at);

  // request a weekday along with a long date
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formatedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
          >
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        {description && <p className="mb-3">{description}</p>}
        {topics.length !== 0 && (
          <div className="mb-2 -mt-2 sm:mt-0">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="badge badge-neutral badge-outline mr-2 p-3 mt-2 sm:mt-0"
              >
                {topic}
              </div>
            ))}
          </div>
        )}
        <p className="mb-3 flex items-center">
          <FaClock className="mr-2" />
          {formatedDate}
        </p>

        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
