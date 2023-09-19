import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    //const onLogin =() => {
    //    axios.post("http://localhost:9000/login")
    //} 
  return (
    <div className="login-box">
        <div className="login-logo">
            <a href="/"><b>Admin</b>LTE</a>
        </div>
        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form >
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
                <div className="row">
                    <div className="col-8">
                        <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                </div>
            </form>

            <p className="mb-1">
                <Link to={"/forgot-password"}>I forgot my password</Link>
            </p>
            <p className="mb-0">
                <Link to={"/register"}>Register a new membership</Link>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Login