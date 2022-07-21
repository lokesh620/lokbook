import React from 'react'
import { useState } from 'react';
import "./register.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export default function Login() {
const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [conformPassword, setConformPassword] = useState('')
const [errorMsg, setErrorMsg] = useState('');

const navigate1 = useNavigate();

function navigate(){
    navigate1('/home' , {replace: false})
}
console.log(userName);


function onSubmit(){
    if(!userName || !email || !password || !conformPassword){    
    setErrorMsg('Please Enter All Fields')
    }
    else{
        navigate();
    }
}


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft1">
                    <h3 className="loginLogo">Lokbook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lokbook.
                    </span>
                </div>
                <div className="loginRight1">
                    <div className="loginBox2">
                        <input
                         value={userName} onChange = {(e)=> setUserName(e.target.value)} placeholder="Username" className="loginInput1" />
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="loginInput1" />
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="loginInput1" />
                        <input value={conformPassword} onChange={(e)=>setConformPassword(e.target.value)} placeholder="Confirm Password " className="loginInput1" />
                        <p className='error-msg'>{errorMsg}</p>
                        <button onClick={()=>onSubmit()} className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
