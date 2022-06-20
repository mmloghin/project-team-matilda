import React from "react";
import './App.css';
import Matilda from './Matilda.jpg';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div className="login">
            <Link to="/">
            <img className="login__logo" alt="matilda" src={Matilda}/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>Sign into your account & start looking for what to read next!</p>
                <button className="login__registrationButton">Create an account</button>

            </div>

        </div>
    )
};

export default Login;