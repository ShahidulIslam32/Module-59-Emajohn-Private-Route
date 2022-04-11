import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Ema-John Login</h1>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Your Email' required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter A Password'required />
                    </div>
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