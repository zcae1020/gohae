"use client";

import React, { useState } from "react";

import { auth as uiAuth } from "firebaseui";
import { FacebookAuthProvider, GoogleAuthProvider, User } from "firebase/auth";

import { auth } from "@/module/firebase";

const ui = new uiAuth.AuthUI(auth);

const Home = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleSignIn = (user: User) => {
        setUser(user);
    };

    const getUiConfig = () => {
        return {
            callbacks: {
                signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                    if (authResult.user) {
                        handleSignIn(authResult.user);
                    }
                    return false;
                },
            },
            signInFlow: "popup",
            signInOptions: [
                GoogleAuthProvider.PROVIDER_ID,
                FacebookAuthProvider.PROVIDER_ID,
            ],
        };
    };

    ui.start("#firebaseui-auth-container", getUiConfig());

    return (
        <div>
            <div id="firebaseui-auth-container" />
            <h1>고해</h1>
            {/* <Button onClick={signInGoogle} className={style.loginButton}>
                <Image alt="google login" src={googleLogin} width={200} />
            </Button>
            <Button onClick={signOut}>로그아웃</Button> */}
            {user?.displayName}
        </div>
    );
};

export default Home;
