import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Sign = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword ] = useState('')
    const [confirmPass , setConfirmPass ] = useState('')
    const [error , setError ] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword , user] = useCreateUserWithEmailAndPassword(auth);


    let handleEmail = event => {
        setEmail(event.target.value)
    }
    let handlePass = event => {
        setPassword(event.target.value)
    }
    let handleCinfirmPass = event => {
        setConfirmPass(event.target.value)
    }
    if(user){
        navigate("/shop")
    }
    let handleFormSubmit = event => {
        event.preventDefault()
        if (password !== confirmPass) {
            setError("Password Didn't Matched !! Try Again")
            return;
        }
        if(password.length < 6){
            setError('Password Must be 6 Characters')
            return
        }
        createUserWithEmailAndPassword(email , password)

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Create New Account</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} name="email" type="email" placeholder='Enter Your Email' required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePass} name="password" type="password" placeholder='Enter A Password' required/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleCinfirmPass} name="confirm-password" type="password" placeholder='Confirm Password' required/>
                    </div>
                    <p style={{color : 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Create Account" />
                </form>
                <p className='new'>
                    Already Have an Account? <Link to='/login'>Login</Link>
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

export default Sign;