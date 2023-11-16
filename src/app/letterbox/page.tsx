"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button, CardContent } from "@mui/material";
import { firestore } from "@/module/firebase";
import style from "./page.module.scss";
import { collection, getDocs } from "firebase/firestore";

const useGetLetters = () => {
  const [letters, setLetters] = useState<
    Array<{
      id: string;
      name: string;
    }>
  >([]);

  const getLetters = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "letters"));
      const lettersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        ...doc.data(),
      }));
      setLetters(lettersData);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }, []);

  useEffect(() => {
    getLetters();
  }, [getLetters]);

  return letters;
};

const Home = () => {
  const letters = useGetLetters();

  return (
    <div>
      <div className={style.card}>
        <CardContent>
          <Button variant="contained" className={style.button}>
            보낸 편지함
          </Button>
        </CardContent>
        <CardContent>
          <Button variant="contained" className={style.button}>
            받은 편지함
          </Button>
        </CardContent>
        <CardContent>
          <Button variant="contained" className={style.button}>
            편지 쓰기
          </Button>
        </CardContent>
      </div>
      <ul>
        {letters.map((letter) => (
          <li key={letter.id}>{letter.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
