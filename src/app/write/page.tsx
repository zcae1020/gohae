"use client";

import React, { useState } from "react";

import { Button, Card, CardContent, Input, List } from "@mui/material";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Card>
        <CardContent>
          <Button>보낸 편지함</Button>
        </CardContent>
        <CardContent>
          <Button>받은 편지함</Button>
        </CardContent>
      </Card>
      <List>
        <li>편지 1</li>
        <li>편지 2</li>
        <li>편지 3</li>
      </List>
      <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </div>
  );
};

export default Home;
