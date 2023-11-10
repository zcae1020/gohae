"use client";

import React, { useState, useEffect } from "react";

import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { Restore } from "@mui/icons-material";

import style from "./page.module.scss";

const navigationData = [
  {
    label: "마이 페이지",
    icon: <Restore />,
    link: "/dashboard",
  },
  {
    label: "편지함",
    icon: <Restore />,
    link: "/letterbox",
  },
  {
    label: "편지쓰기",
    icon: <Restore />,
    link: "/write",
  },
  {
    label: "상점",
    icon: <Restore />,
    link: "/store",
  },
  {
    label: "더보기",
    icon: <Restore />,
    link: "/more",
  },
];

const Home = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <div>
      <Box className={style.wrapper} sx={{ width: 1000 }}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            window.location.assign(navigationData[newValue].link);
            // router.push(navigationData[newValue].link);
          }}
        >
          {navigationData.map((item) => {
            return (
              <BottomNavigationAction
                className={style.item}
                key={item.label}
                label={item.label}
                icon={item.icon}
              />
            );
          })}
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Home;
