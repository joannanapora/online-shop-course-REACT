import React from 'react';
import './sign-in-sign-up.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const signInSignUp = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default signInSignUp;