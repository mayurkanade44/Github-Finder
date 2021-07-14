import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import loginImg from '../images/github.jpg'

const Login = () => {
  const {loginWithRedirect} = useAuth0()
    return (
      <div className="login">
        <div className="text-center pt-5 ">
          <img
            className="img-fluid"
            style={{ height: 500 }}
            src={loginImg}
            alt="github user"
          />
        </div>
        <div className="d-flex justify-content-center my-5">
          <button className="btn btn-warning btn-lg" onClick={loginWithRedirect}>Login / Sign Up</button>
        </div>
      </div>
    );
}

export default Login
