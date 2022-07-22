import React from 'react'
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [errorMsg1, setErrorMsg1] = useState('');
    
    const { handleSubmit } = useForm();


const navigate2 = useNavigate();

function navigate3(){
    navigate2('/home' , {replace: false});
}

const handlePanna = () => {
    setErrorMsg(false)
    if (email !== 'lokesh@gmail.com') {
        setErrorMsg('Enter Valid Email Id')
    }
}

    const handlePassword = () => {
        setErrorMsg1(false)
        if (password !== '123456') {
            setErrorMsg1('Enter Valid Password')
        }
    }

    function onSubmit(){
        if(email === 'lokesh@gmail.com' && password === '123456'){
            navigate3();
        }
}


    return (
        <div className="login" >
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lokbook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lokbook.
                    </span>
                </div>
                <div className="loginRight">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="loginBox1">
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="loginInput1" required/>
                        <p className='error-msg'>{errorMsg}</p>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="loginInput1" required/>
                        <p className='error-msg'>{errorMsg1}</p>
                        <button onClick = {() => {handlePassword(); handlePanna() }} className="loginButton">
                            Log in
                        </button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">
                            <Link className="loginRegisterButtonLink" to="/register">Create a New Account</Link>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
