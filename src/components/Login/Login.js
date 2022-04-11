import React from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [signInWithEmailAndPassword,user,error] = useSignInWithEmailAndPassword(auth);

    let handleEmail = event => {
        setEmail(event.target.value)
    }
    let handlePass = event => {
        setPassword(event.target.value)
    }

    const location = useLocation()
    let from = location.state?.from?.pathname || '/';
    
    if (user) {
        navigate(from , {replace:true})
        swal("Login Successful!", "Now You Redirect The Cart Page ...", "success");
    }
    let handleFormSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email , password)}

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Ema-John Login</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" placeholder='Enter Your Email' required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePass} type="password" placeholder='Enter A Password'required />
                    </div>
                    <p>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='new'>
                    New To Ema-john? <Link to='/signin'>Create A New Account</Link>
                </p>
                <div className='google'>
                    <span></span>
                    <p>Or Continue Using</p>
                    <span></span>
                    <input className='google' type="submit" value="Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;