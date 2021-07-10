import React, { useState } from 'react';
import './sign-up.component.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user);
            setPassword(""); 
            setEmail(""); 
            setConfirmPassword("");
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

        return (
            <div className="sign-up">
                <h2 className="title"> I am new user</h2>
                <span> Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        label='Email'
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        label='Password'
                        required />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        label='Confirm Password'
                        required />
                        <div className='error-message'>{errorMessage}</div>
                    <CustomButton onClick={handleSubmit} type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
}


export default SignUp;