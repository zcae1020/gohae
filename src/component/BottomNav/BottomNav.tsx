"use client";

import React, { useState, useEffect } from "react";

import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

import style from "./BottomNav.module.scss";

const BottomNav = ({
  navigationData,
}: {
  navigationData: {
    label: string;
    icon: React.ReactNode;
    link: string;
  }[];
}) => {
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

export default BottomNav;
