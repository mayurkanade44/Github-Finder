import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-5">
      <h1>Page Not Found 404</h1>
      <Link to='/' className="btn btn-primary">Back To Home</Link>
    </div>
  );
};

export default Error;
