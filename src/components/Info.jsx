import React from "react";
import { useGithubContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {
  const { githubUser } = useGithubContext();
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      name: "Repos",
      value: public_repos,
      color: "#F3F4ED",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      name: "Followers",
      value: followers,
      color: "yellow",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      name: "Following",
      value: following,
      color: "#78DEC7",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      name: "Gists",
      value: public_gists,
      color: "black",
    },
  ];

  return (
    <div className="container">
      <div className="row g-5">
        {items.map((item) => {
          const { id, icon, name, value, color } = item;
          return (
            <div className="col col-lg-3 col-md-6" key={id}>
              <div className="card mx-3 mobile-card">
                <div className="card-body">
                  <h5 className="card-title text-center">{name}</h5>
                  <div className="d-flex justify-content-around mt-4">
                    <h6 className="card-subtitle mb-2 info-icon" style={{color:color}}>{icon}</h6>
                    <p className="card-value">{value}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
