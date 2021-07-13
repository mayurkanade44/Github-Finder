import React from 'react'
import loginImg from '../images/login-img.svg'

const Login = () => {
    return (
      <>
        <div className="text-center mt-5">
          <img
            className="img-fluid"
            style={{ height: 500 }}
            src={loginImg}
            alt="github user"
          />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-warning btn-lg">Login</button>
        </div>
      </>
    );
}

export default Login
