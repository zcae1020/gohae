"use client";

import React, { useState } from "react";

import { Button, Input, TextField } from "@mui/material";
import { firestore } from "@/module/firebase";
import { addDoc, collection } from "firebase/firestore";

const Home = () => {
  const [value, setValue] = useState("");

  const onClick = () => {
    addDoc(collection(firestore, "users"), {
      name: value,
    });
    setValue("");
  };

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <TextField label="Multiline" />
      <Button onClick={onClick}>Button</Button>
    </div>
  );
};

export default Home;
