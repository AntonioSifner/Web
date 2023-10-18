import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import {auth} from './firebase'

const Login = () =>{

    const navigate = useNavigate();
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');

    const loginuser = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then(() => navigate('/'))
        .catch((e) => alert(e.message));
    };
      

    const signupuser = () =>{
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then(() =>  navigate('/'))
        .catch(e => alert(e.massage))
    } 

    return(
        <div className="login">
            <Link>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input id="input1" value={useremail} placeholder="Enter a e-mail" onChange={event => setUserEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input id="input2" value={userpassword} placeholder="Enter a password" onChange={event => setUserPassword(event.target.value)} type="password" />
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By signing in, you agree to Amazon's Terms and Conditions.</p>
                <button onClick={signupuser} type="submit" className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;