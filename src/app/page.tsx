"use client";

import React, { useEffect } from "react";

import { Button } from "@mui/material";
import { signInGoogle, signOut } from "@/module/auth";
import { auth } from "@/module/firebase";
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <Image
                alt="google login"
                src="_/googleLogin.svg"
                width={14}
                height={14}
            />
            <Button onClick={signInGoogle}>로그인</Button>
            <Button onClick={signOut}>로그아웃</Button>
            {auth.currentUser?.displayName}
        </div>
    );
};

export default Home;
