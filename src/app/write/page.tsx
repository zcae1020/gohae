"use client";

import React, { useState } from "react";

import { Input, TextField } from "@mui/material";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <TextField label="Multiline" />
    </div>
  );
};

export default Home;
