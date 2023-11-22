"use client";

import React from "react";

import { Button } from "@mui/material";
import { signInGoogle } from "@/module/firebase";

const Home = () => {
  return (
    <div>
      <Button onClick={signInGoogle}>로그인</Button>home
    </div>
  );
};

export default Home;
