import React from 'react'
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

const navigate2 = useNavigate();

function navigate3(){
    navigate2('/home' , {replace: false});
}


function onSubmit(){
    if(email !== 'lokesh@gmail.com' && password !== 123456){    
    setErrorMsg('Please Enter Valid Details')
    }
    else navigate3();
}
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lokbook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lokbook.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox1">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="loginInput1" />
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="loginInput1" />
                        <p className='error-msg'>{errorMsg}</p>
                        <button onClick={(e)=>onSubmit(e)} className="loginButton">
                            {/* <Link className="loginRegisterButtonLink" to="/">Log In</Link> */}
                            Log in
                        </button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">
                            <Link className="loginRegisterButtonLink" to="/register">Create a New Account</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
