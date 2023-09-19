import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="register-box">
      <div className="register-logo">
        <a href="/"><b>Admin</b>LTE</a>
      </div>

      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Register a new membership</p>

          <form >
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Full name" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Retype password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8"></div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Register</button>
              </div>
            </div>
          </form>
          <Link to={"/"}>I already have a membership</Link>
        </div>
      </div>
    </div>
  )
}

export default Register