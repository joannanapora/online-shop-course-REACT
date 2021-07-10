import React, {useState} from 'react';
import './sign-in.component.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle();
    }

    const handleSumbit = async event => {

        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail("")
            setPassword("")
        } catch (error) {
            setErrorMessage(error.message)
        }

    };

        return (
            <div className='sign-in'>
                <h2>I have an account</h2>
                <span>Log in with email and password </span>
                <form className='form' onSubmit={handleSumbit}>
                    <FormInput name="email" type="email" value={email} handleChange={(e)=>setEmail(e.target.value)} required label="Email" />
                    <FormInput name="password" type="password" value={password} handleChange={(e)=>setPassword(e.target.value)} required label="Password" />
                    <div className='error-message'>{errorMessage}</div>
                    <div className="buttons">
                        <CustomButton onClick={handleSumbit} type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={handleGoogleLogin} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
}

export default SignIn;