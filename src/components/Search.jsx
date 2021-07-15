import React, { useState } from "react";
import { useGithubContext } from "../context/github_context";

const Search = () => {
  const [user, setUser] = useState("");
  const {
    requests,
    error: { show, msg },
    searchUser,
  } = useGithubContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(user);
  };
  return (
    <div className="container">
      {show && <p className="text-danger text-center">{msg}</p>}
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="input-group mb-4 w-75 mobile-search"
        >
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Github User"
          />
          <button type="submit" className="btn btn-info ">
            Search
          </button>
          <h5 className="request mobile-request">Request: {requests}/60</h5>
        </form>
      </div>
    </div>
  );
};

export default Search;
