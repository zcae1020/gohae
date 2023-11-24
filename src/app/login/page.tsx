"use client";

import React, { useEffect } from "react";

import Image from "next/image";

import { Button } from "@mui/material";
import { signInGoogle, signOut } from "@/module/auth";
import { auth } from "@/module/firebase";

import googleLogin from "#/googleLogin.svg";

import style from "./page.module.scss";

const Home = () => {
    useEffect(() => {
        console.log("auth.currentUser", auth.currentUser);
    }, []);

    return (
        <div>
            <h1>고해</h1>
            <Button onClick={signInGoogle} className={style.loginButton}>
                <Image alt="google login" src={googleLogin} width={200} />
            </Button>
            <Button onClick={signOut}>로그아웃</Button>
            {auth.currentUser?.displayName}
        </div>
    );
};

export default Home;
