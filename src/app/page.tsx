"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { signInGoogle, signOut } from "@/module/auth";
import { type User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/module/firebase";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user", user);
      setUser(user);
    }
  });

  return (
    <div>
      <Button onClick={signInGoogle}>로그인</Button>
      <Button onClick={signOut}>로그아웃</Button>
      {user?.displayName}
    </div>
  );
};

export default Home;
