import React, { useEffect } from "react";
import { getGithubRepos } from "../../redux/actions/profile";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileGithub({ username }) {
  const dispatch = useDispatch();

  const { repos } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, [dispatch, username]);

  return (
    <div className="profile-github">
      <h2 className="text-primary m-1">Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  Stars: {repo.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  Watcher: {repo.watcher_count}
                </li>
                <li className="badge badge-primary">
                  Repos: {repo.forks_counyt}
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
