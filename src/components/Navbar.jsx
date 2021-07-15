import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated,logout, user } =
    useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <div>
      <nav className="navbar navbar-light bg-white mb-5">
        <div className="container-fluid">
          <div className="navbar-brand d-flex mx-auto">
            {isUser && user.picture && (
              <img className='navbar-img' src={user.picture} alt={user.name} />
            )}

            {isUser && user.name && (
              <h5 className="mt-2 mx-4 mobile-navbar">
                Welcome, <strong>{user.name.toUpperCase()}</strong>
              </h5>
            )}

            {isUser && (
              <button
                className="btn btn-outline-dark" style={{height:35}}
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
