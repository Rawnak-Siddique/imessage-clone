import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "../firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className="login" >
            <div className="login__logo">
                <img src="https://png.pngitem.com/pimgs/s/32-321008_transparent-imessage-icon-png-circle-png-download.png" alt=""/>
                <h1>iMessage</h1>
            </div>
           <Button onClick={signIn} >Sign In</Button>
        </div>
    )
};

export default Login;
