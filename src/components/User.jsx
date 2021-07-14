import React from "react";
import UserCard from "./UserCard";
import Followers from "./Followers";

const User = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-lg-6">
          <UserCard />
        </div>
        <div className="col-lg-6">
          <Followers />
        </div>
      </div>
    </div>
  );
};

export default User;
