import React from "react";
import { useGithubContext } from "../context/github_context";
import { MdBusinessCenter, MdLocationOn, MdLink } from "react-icons/md";

const UserCard = () => {
  const { githubUser } = useGithubContext();
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
  } = githubUser;
  return (
    <>
      <h3 className="title">User</h3>
      <div className="card p-4 border border-white">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={avatar_url}
              className="d-inline user-profile mobile-user-profile"
              alt={name}
            />
            <span className="ms-3 mobile-name " style={{ fontSize: 24, fontWeight: 700 }}>
              {name}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <a href={html_url} className="btn btn-outline-info btn-lg">
              Follow
            </a>
          </div>
        </div>
        <p className="py-2">{bio}</p>
        <div>
          <MdBusinessCenter className="me-2" />
          {company}
        </div>
        <div>
          <MdLocationOn className="me-2" />
          {location}
        </div>
        <a href={`https://${blog}`}>
          <MdLink className="me-2" />
          {blog}
        </a>
      </div>
    </>
  );
};

export default UserCard;
