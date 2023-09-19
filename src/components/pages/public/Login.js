import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserByEmail } from '../../../applicatif/sevice'

function Login() {
    //const emailRef= useRef();
    const navigate = useNavigate();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(()=>{
        setErrMsg("");
    }, [email, password])


    const handleSubmit = async (e) =>{
        e.preventDefault();
        getUserByEmail(email).then(resp => {
            let user = resp.data[0];
            if(!user){
                console.log("password are not equal");
            }
            if(user && user.password === password){
                console.log("passwords are equal");
                navigate("/protected/dashboard");
            }
        })
    }

  return (
    <div className="login-box">
        <div className="login-logo">
            <a href="/"><b>Admin</b>LTE</a>
        </div>
        <div className="card">
            <div className="card-body login-card-body">
            <p ref={errRef}  className={errMsg ? "login-box-msg":"offscreen"}>{errMsg}</p>
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" 
                        placeholder="Email" 
                        required
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" 
                        placeholder="Password" 
                        required
                    />
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