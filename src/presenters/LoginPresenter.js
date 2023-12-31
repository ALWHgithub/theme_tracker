import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";


import firebaseConfig from '../firebaseConfig';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginPresenter() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleClick() {
        signInWithEmailAndPassword(auth,username,password).then(() => {
            navigate("/home")
        })
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return <div>
            <p>Test</p>
            <input type="text" value={username} onChange={handleUsernameChange} />
            <input type="text" value={password} onChange={handlePasswordChange} />
            <button type="button" onClick={handleClick}>
                Login
            </button>
        </div>
  }

  
  export default LoginPresenter;