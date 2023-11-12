"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

import style from "./BottomNav.module.scss";

import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

const BottomNav = ({
  navigationData,
}: {
  navigationData: {
    label: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    link: string;
  }[];
}) => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  return (
    <div>
      <Box className={style.wrapper} sx={{ width: 1000 }}>
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
            router.push(navigationData[newValue].link);
          }}
        >
          {navigationData.map((item) => {
            return (
              <BottomNavigationAction
                className={style.item}
                key={item.label}
                label={item.label}
                icon={<item.icon />}
              />
            );
          })}
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default BottomNav;
